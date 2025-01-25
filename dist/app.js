"use strict";
var he = Object.create;
var G = Object.defineProperty;
var Ie = Object.getOwnPropertyDescriptor;
var Re = Object.getOwnPropertyNames,
	$ = Object.getOwnPropertySymbols,
	ye = Object.getPrototypeOf,
	z = Object.prototype.hasOwnProperty,
	Se = Object.prototype.propertyIsEnumerable;
var W = (s, r) => {
	var e = {};
	for (var t in s) z.call(s, t) && r.indexOf(t) < 0 && (e[t] = s[t]);
	if (s != null && $) for (var t of $(s)) r.indexOf(t) < 0 && Se.call(s, t) && (e[t] = s[t]);
	return e;
};
var we = (s, r, e, t) => {
	if ((r && typeof r == "object") || typeof r == "function")
		for (let o of Re(r)) !z.call(s, o) && o !== e && G(s, o, { get: () => r[o], enumerable: !(t = Ie(r, o)) || t.enumerable });
	return s;
};
var p = (s, r, e) => (
	(e = s != null ? he(ye(s)) : {}), we(r || !s || !s.__esModule ? G(e, "default", { value: s, enumerable: !0 }) : e, s)
);
var n = (s, r, e) =>
	new Promise((t, o) => {
		var i = (u) => {
				try {
					m(e.next(u));
				} catch (h) {
					o(h);
				}
			},
			c = (u) => {
				try {
					m(e.throw(u));
				} catch (h) {
					o(h);
				}
			},
			m = (u) => (u.done ? t(u.value) : Promise.resolve(u.value).then(i, c));
		m((e = e.apply(s, r)).next());
	});
var O = p(require("express"));
var me = p(require("express"));
var ne = p(require("express"));
var H = p(require("jsonwebtoken")),
	R = class {
		constructor() {
			this.hash = (r, e) => {
				let t = process.env.SECRET;
				if (!t) throw new Error("A vari\xE1vel de ambiente SECRET n\xE3o est\xE1 definida.");
				return H.default.sign({ email: r, id: e }, t);
			};
			this.verify = (r) => {
				let e = process.env.SECRET;
				if (!e) throw new Error("A vari\xE1vel de ambiente SECRET n\xE3o est\xE1 definida.");
				return H.default.verify(r, e);
			};
		}
	};
var y = p(require("bcrypt"));
var S = class {
	constructor() {
		this.encryptPassword = (r) =>
			n(this, null, function* () {
				let e = yield y.default.genSalt(15);
				return yield y.default.hash(r, e);
			});
		this.passwordValidation = (r, e) =>
			n(this, null, function* () {
				return yield y.default.compare(r, e);
			});
	}
};
var w = p(require("joi")),
	b = class {
		hasError(r, e) {
			let { error: t } = e.validate(r);
			if (t) throw new Error(t.message);
		}
		nameUser(r) {
			let e = w.default.string().required().trim().min(3).max(30).empty().label("nome do usu\xE1rio");
			this.hasError(r, e);
		}
		emailUser(r) {
			let e = w.default.string().required().trim().min(10).max(35).email().empty().label("email do usu\xE1rio");
			this.hasError(r, e);
		}
		passwordUser(r) {
			let e = w.default.string().required().trim().min(8).max(15).empty().label("senha do usu\xE1rio");
			this.hasError(r, e);
		}
		registerUser(r, e, t) {
			try {
				this.nameUser(r), this.emailUser(e), this.passwordUser(t);
			} catch (o) {
				throw o;
			}
		}
		loginUser(r, e) {
			try {
				this.emailUser(r), this.passwordUser(e);
			} catch (t) {
				throw t;
			}
		}
	};
var a = class {
	getDatasBodyLogin(r) {
		return r.body;
	}
	getDatasBodyRegister(r) {
		return r.body;
	}
	messageError(r) {
		return { error: r.message };
	}
};
var v = class extends a {
	constructor(e) {
		super();
		this.verifyDatasUser = e;
		this.verifyDatasBodyUserRegister = (e, t, o) => {
			try {
				let { name: i, email: c, password: m } = this.getDatasBodyRegister(e);
				this.verifyDatasUser.registerUser(i, c, m), o();
			} catch (i) {
				t.status(400).json(this.messageError(i));
			}
		};
	}
};
var D = class extends a {
	constructor(e) {
		super();
		this.generateHash = e;
		this.authenticationTokenUser = (e, t, o) => {
			try {
				let i = this.getToken(e),
					c = this.generateHash.verify(i);
				(t.locals.token = c), o();
			} catch (i) {
				t.status(400).json(super.messageError(i));
			}
		};
	}
	getToken(e) {
		let t = e.headers.authorization;
		if (!t || t.trim().length === 0) throw new Error("token invalido");
		return t;
	}
};
var U = class extends a {
	constructor() {
		super(...arguments);
		this.error = (e, t, o, i) => {
			o.status(400).send(super.messageError(e));
		};
	}
};
var x = class extends a {
	constructor(e) {
		super();
		this.verifyDatasUser = e;
		this.verifyDatasBodyUserLogin = (e, t, o) => {
			try {
				let { email: i, password: c } = super.getDatasBodyLogin(e);
				this.verifyDatasUser.loginUser(i, c), o();
			} catch (i) {
				t.status(400).json(super.messageError(i));
			}
		};
	}
};
var J = p(require("pg")),
	l = new J.default.Pool({ connectionString: process.env.URL_DB, ssl: { rejectUnauthorized: !1 } });
function g(s) {
	return s.replace("--sql", "");
}
var d = class {
	constructor(r) {
		this.table = r;
		this.search = (r) =>
			n(this, null, function* () {
				try {
					let e = r.map((i) => `"${i}"`).join(","),
						t = g(`--sql SELECT ${e} FROM "${this.table}"`),
						{ rows: o } = yield l.query(t);
					return o;
				} catch (e) {
					throw e;
				}
			});
	}
};
var q = class {
	constructor(r) {
		this.structureSelectAdapter = r;
		this.search = (r) =>
			n(this, null, function* () {
				return (yield this.structureSelectAdapter.search(r)).at(0);
			});
	}
};
var A = class {
	constructor() {
		this.querySelectUser = (r) =>
			n(this, null, function* () {
				var e;
				try {
					let t = g(`--sql
			SELECT 
				id,
				email,
				password
			FROM
				register_user
			WHERE
				email = $1`),
						{ rows: o } = yield l.query(t, [r]);
					return (e = o.at(0)) != null ? e : null;
				} catch (t) {
					throw t;
				}
			});
	}
};
var E = class {
	constructor() {
		this.queryCreateUser = (r, e, t) =>
			n(this, null, function* () {
				try {
					let o = g(`--sql
			INSERT INTO register_user
			(
				id,
				name,
				email, 
				password
			)
			VALUES (
				DEFAULT, 
				$1, 
				$2, 
				$3,
			)`);
					yield l.query(o, [r, e, t]);
				} catch (o) {
					throw o;
				}
			});
	}
};
var P = class {
	constructor(r, e) {
		this.encrypt = r;
		this.loginAdapter = e;
		this.message = {
			success: ({ email: r, id: e }) => ({ ok: !0, status: "usuario logado com sucesso", email: r, id: e }),
			error: "email ou senha inv\xE1lida",
		};
		this.login = (t) =>
			n(this, [t], function* ({ email: r, password: e }) {
				try {
					let o = yield this.loginAdapter.querySelectUser(r);
					if (!o) throw new Error(this.message.error);
					if (!(yield this.encrypt.passwordValidation(e, o.password))) throw new Error(this.message.error);
					return this.message.success(o);
				} catch (o) {
					throw o;
				}
			});
	}
};
var C = class {
	constructor(r, e) {
		this.encrypt = r;
		this.registerAdapter = e;
		this.messageSuccess = { ok: !0, status: "usuario cadastrado com sucesso" };
		this.register = (o) =>
			n(this, [o], function* ({ name: r, email: e, password: t }) {
				try {
					let i = yield this.encrypt.encryptPassword(t);
					return yield this.registerAdapter.queryCreateUser(r, e, i), this.messageSuccess;
				} catch (i) {
					throw i;
				}
			});
	}
};
var T = class {
	constructor(r, e, t) {
		this.structureAdapterSelectFooter = r;
		this.structureAdapterSelectImages = e;
		this.structureAdapterSelectMenu = t;
		this.searchAllContent = (o) =>
			n(this, [o], function* ({ attrFooter: r, attrImages: e, attrMenu: t }) {
				try {
					let [i, c, m] = yield Promise.all([
						this.structureAdapterSelectFooter.search(r),
						this.structureAdapterSelectImages.search(e),
						this.structureAdapterSelectMenu.search(t),
					]);
					return { footer: i, images: c, menu: m };
				} catch (i) {
					throw i;
				}
			});
	}
};
var M = class extends a {
	constructor(e, t) {
		super();
		this.loginUserDb = e;
		this.generateHash = t;
		this.loginUser = (e, t, o) =>
			n(this, null, function* () {
				try {
					let c = this.getDatasBodyLogin(e),
						i = yield this.loginUserDb.login(c),
						{ id: m, email: u } = i,
						h = W(i, ["id", "email"]),
						fe = this.generateHash.hash(u, m);
					t.status(200).setHeader("authorization", fe).json(h);
				} catch (c) {
					o(c);
				}
			});
	}
};
var F = class extends a {
	constructor(e) {
		super();
		this.registerUserDb = e;
		this.registerUser = (e, t, o) =>
			n(this, null, function* () {
				try {
					let i = this.getDatasBodyRegister(e),
						c = yield this.registerUserDb.register(i);
					t.status(201).json(c);
				} catch (i) {
					o(i);
				}
			});
	}
};
var L = class {
	constructor() {
		this.welcomeUser = (r, e) =>
			n(this, null, function* () {
				e.status(200).type(".html").send("<h1>Ola seja bem vindo</h1>");
			});
	}
};
var k = class extends a {
	constructor(e, t) {
		super();
		this.structureDbSelectService = e;
		this.option_query_select_attributes_db = t;
		this.getDatasPageInterfaceDB = (e, t, o) =>
			n(this, null, function* () {
				try {
					let i = yield this.structureDbSelectService.searchAllContent(this.option_query_select_attributes_db);
					t.status(200).send(i);
				} catch (i) {
					o(i);
				}
			});
	}
};
var K = { attrFooter: ["id", "url", "redes"], attrImages: ["url", "title", "id"], attrMenu: ["public", "private", "title"] };
var be = new d("structure_footer"),
	ve = new d("structure_images"),
	De = new d("structure_menu"),
	Ue = new q(De),
	xe = new T(be, ve, Ue),
	N = new k(xe, K),
	Q = new R(),
	X = new S(),
	Y = new b(),
	Z = new x(Y),
	ee = new v(Y),
	re = new D(Q),
	te = new U(),
	qe = new E(),
	Ae = new A(),
	Ee = new P(X, Ae),
	Pe = new C(X, qe),
	se = new M(Ee, Q),
	oe = new F(Pe),
	ie = new L();
var B = (0, ne.default)();
B.post("/", Z.verifyDatasBodyUserLogin, se.loginUser);
var ae = p(require("express"));
var V = (0, ae.default)();
V.post("/", ee.verifyDatasBodyUserRegister, oe.registerUser);
var ce = p(require("express"));
var _ = (0, ce.default)();
_.post("/", re.authenticationTokenUser, N.getDatasPageInterfaceDB);
_.get("/", N.getDatasPageInterfaceDB);
var pe = p(require("express"));
var j = (0, pe.default)();
j.get("/", ie.welcomeUser);
var f = (0, me.default)();
f.use("/signup", V);
f.use("/login", B);
f.use("/welcome", j);
f.use("/", _);
var de = p(require("cors"));
var ue = {
	methods: ["POST", "GET"],
	origin: ["https://cubo-serie.vercel.app", "http://localhost:5173"],
	allowedHeaders: ["Authorization", "Content-Type"],
	exposedHeaders: ["Authorization"],
};
var ge,
	le = Number((ge = process.env.PORT) != null ? ge : "3000"),
	I = (0, O.default)();
I.use((0, de.default)(ue));
I.use(O.default.json());
I.use(f);
I.use(te.error);
I.listen(le, () => console.log(`server running on http://localhost:${le}`));
