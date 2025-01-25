"use strict";
var me = Object.create;
var V = Object.defineProperty;
var ue = Object.getOwnPropertyDescriptor;
var le = Object.getOwnPropertyNames;
var ge = Object.getPrototypeOf,
	de = Object.prototype.hasOwnProperty;
var fe = (o, r, e, t) => {
	if ((r && typeof r == "object") || typeof r == "function")
		for (let s of le(r)) !de.call(o, s) && s !== e && V(o, s, { get: () => r[s], enumerable: !(t = ue(r, s)) || t.enumerable });
	return o;
};
var c = (o, r, e) => (
	(e = o != null ? me(ge(o)) : {}), fe(r || !o || !o.__esModule ? V(e, "default", { value: o, enumerable: !0 }) : e, o)
);
var B = c(require("express"));
var oe = c(require("express"));
var ee = c(require("express"));
var L = c(require("jsonwebtoken")),
	d = class {
		constructor() {
			this.hash = (r, e) => {
				let t = process.env.SECRET;
				if (!t) throw new Error("A vari\xE1vel de ambiente SECRET n\xE3o est\xE1 definida.");
				return L.default.sign({ email: r, id: e }, t);
			};
			this.verify = (r) => {
				let e = process.env.SECRET;
				if (!e) throw new Error("A vari\xE1vel de ambiente SECRET n\xE3o est\xE1 definida.");
				return L.default.verify(r, e);
			};
		}
	};
var f = c(require("bcrypt")),
	h = class {
		constructor() {
			this.encryptPassword = async (r) => {
				let e = await f.default.genSalt(15);
				return await f.default.hash(r, e);
			};
			this.passwordValidation = async (r, e) => await f.default.compare(r, e);
		}
	};
var I = c(require("joi")),
	R = class {
		hasError(r, e) {
			let { error: t } = e.validate(r);
			if (t) throw new Error(t.message);
		}
		nameUser(r) {
			let e = I.default.string().required().trim().min(3).max(30).empty().label("nome do usu\xE1rio");
			this.hasError(r, e);
		}
		emailUser(r) {
			let e = I.default.string().required().trim().min(10).max(35).email().empty().label("email do usu\xE1rio");
			this.hasError(r, e);
		}
		passwordUser(r) {
			let e = I.default.string().required().trim().min(8).max(15).empty().label("senha do usu\xE1rio");
			this.hasError(r, e);
		}
		registerUser(r, e, t) {
			try {
				this.nameUser(r), this.emailUser(e), this.passwordUser(t);
			} catch (s) {
				throw s;
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
var n = class {
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
var y = class extends n {
	constructor(e) {
		super();
		this.verifyDatasUser = e;
		this.verifyDatasBodyUserRegister = (e, t, s) => {
			try {
				let { name: i, email: a, password: F } = this.getDatasBodyRegister(e);
				this.verifyDatasUser.registerUser(i, a, F), s();
			} catch (i) {
				t.status(400).json(this.messageError(i));
			}
		};
	}
};
var S = class extends n {
	constructor(e) {
		super();
		this.generateHash = e;
		this.authenticationTokenUser = (e, t, s) => {
			try {
				let i = this.getToken(e),
					a = this.generateHash.verify(i);
				(t.locals.token = a), s();
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
var w = class extends n {
	constructor() {
		super(...arguments);
		this.error = (e, t, s, i) => {
			s.status(400).send(super.messageError(e));
		};
	}
};
var b = class extends n {
	constructor(e) {
		super();
		this.verifyDatasUser = e;
		this.verifyDatasBodyUserLogin = (e, t, s) => {
			try {
				let { email: i, password: a } = super.getDatasBodyLogin(e);
				this.verifyDatasUser.loginUser(i, a), s();
			} catch (i) {
				t.status(400).json(super.messageError(i));
			}
		};
	}
};
var j = c(require("pg")),
	p = new j.default.Pool({ connectionString: process.env.URL_DB, ssl: { rejectUnauthorized: !1 } });
function m(o) {
	return o.replace("--sql", "");
}
var u = class {
	constructor(r) {
		this.table = r;
		this.search = async (r) => {
			try {
				let e = r.map((i) => `"${i}"`).join(","),
					t = m(`--sql SELECT ${e} FROM "${this.table}"`),
					{ rows: s } = await p.query(t);
				return s;
			} catch (e) {
				throw e;
			}
		};
	}
};
var v = class {
	constructor(r) {
		this.structureSelectAdapter = r;
		this.search = async (r) => (await this.structureSelectAdapter.search(r)).at(0);
	}
};
var D = class {
	constructor() {
		this.querySelectUser = async (r) => {
			try {
				let e = m(`--sql
			SELECT 
				id,
				email,
				password
			FROM
				register_user
			WHERE
				email = $1`),
					{ rows: t } = await p.query(e, [r]);
				return t.at(0) ?? null;
			} catch (e) {
				throw e;
			}
		};
	}
};
var U = class {
	constructor() {
		this.queryCreateUser = async (r, e, t) => {
			try {
				let s = m(`--sql
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
				await p.query(s, [r, e, t]);
			} catch (s) {
				throw s;
			}
		};
	}
};
var x = class {
	constructor(r, e) {
		this.encrypt = r;
		this.loginAdapter = e;
		this.message = {
			success: ({ email: r, id: e }) => ({ ok: !0, status: "usuario logado com sucesso", email: r, id: e }),
			error: "email ou senha inv\xE1lida",
		};
		this.login = async ({ email: r, password: e }) => {
			try {
				let t = await this.loginAdapter.querySelectUser(r);
				if (!t) throw new Error(this.message.error);
				if (!(await this.encrypt.passwordValidation(e, t.password))) throw new Error(this.message.error);
				return this.message.success(t);
			} catch (t) {
				throw t;
			}
		};
	}
};
var q = class {
	constructor(r, e) {
		this.encrypt = r;
		this.registerAdapter = e;
		this.messageSuccess = { ok: !0, status: "usuario cadastrado com sucesso" };
		this.register = async ({ name: r, email: e, password: t }) => {
			try {
				let s = await this.encrypt.encryptPassword(t);
				return await this.registerAdapter.queryCreateUser(r, e, s), this.messageSuccess;
			} catch (s) {
				throw s;
			}
		};
	}
};
var A = class {
	constructor(r, e, t) {
		this.structureAdapterSelectFooter = r;
		this.structureAdapterSelectImages = e;
		this.structureAdapterSelectMenu = t;
		this.searchAllContent = async ({ attrFooter: r, attrImages: e, attrMenu: t }) => {
			try {
				let [s, i, a] = await Promise.all([
					this.structureAdapterSelectFooter.search(r),
					this.structureAdapterSelectImages.search(e),
					this.structureAdapterSelectMenu.search(t),
				]);
				return { footer: s, images: i, menu: a };
			} catch (s) {
				throw s;
			}
		};
	}
};
var E = class extends n {
	constructor(e, t) {
		super();
		this.loginUserDb = e;
		this.generateHash = t;
		this.loginUser = async (e, t, s) => {
			try {
				let i = this.getDatasBodyLogin(e),
					{ id: a, email: F, ...ce } = await this.loginUserDb.login(i),
					pe = this.generateHash.hash(F, a);
				t.status(200).setHeader("authorization", pe).json(ce);
			} catch (i) {
				s(i);
			}
		};
	}
};
var P = class extends n {
	constructor(e) {
		super();
		this.registerUserDb = e;
		this.registerUser = async (e, t, s) => {
			try {
				let i = this.getDatasBodyRegister(e),
					a = await this.registerUserDb.register(i);
				t.status(201).json(a);
			} catch (i) {
				s(i);
			}
		};
	}
};
var C = class {
	constructor() {
		this.welcomeUser = async (r, e) => {
			e.status(200).type(".html").send("<h1>Ola seja bem vindo</h1>");
		};
	}
};
var T = class extends n {
	constructor(e, t) {
		super();
		this.structureDbSelectService = e;
		this.option_query_select_attributes_db = t;
		this.getDatasPageInterfaceDB = async (e, t, s) => {
			try {
				let i = await this.structureDbSelectService.searchAllContent(this.option_query_select_attributes_db);
				t.status(200).send(i);
			} catch (i) {
				s(i);
			}
		};
	}
};
var O = { attrFooter: ["id", "url", "redes"], attrImages: ["url", "title", "id"], attrMenu: ["public", "private", "title"] };
var he = new u("structure_footer"),
	Ie = new u("structure_images"),
	Re = new u("structure_menu"),
	ye = new v(Re),
	Se = new A(he, Ie, ye),
	k = new T(Se, O),
	$ = new d(),
	G = new h(),
	z = new R(),
	W = new b(z),
	J = new y(z),
	K = new S($),
	Q = new w(),
	we = new U(),
	be = new D(),
	ve = new x(G, be),
	De = new q(G, we),
	X = new E(ve, $),
	Y = new P(De),
	Z = new C();
var _ = (0, ee.default)();
_.post("/", W.verifyDatasBodyUserLogin, X.loginUser);
var re = c(require("express"));
var H = (0, re.default)();
H.post("/", J.verifyDatasBodyUserRegister, Y.registerUser);
var te = c(require("express"));
var M = (0, te.default)();
M.post("/", K.authenticationTokenUser, k.getDatasPageInterfaceDB);
M.get("/", k.getDatasPageInterfaceDB);
var se = c(require("express"));
var N = (0, se.default)();
N.get("/", Z.welcomeUser);
var l = (0, oe.default)();
l.use("/signup", H);
l.use("/login", _);
l.use("/welcome", N);
l.use("/", M);
var ae = c(require("cors"));
var ie = {
	methods: ["POST", "GET"],
	origin: ["https://cubo-serie.vercel.app", "http://localhost:5173"],
	allowedHeaders: ["Authorization", "Content-Type"],
	exposedHeaders: ["Authorization"],
};
var ne = Number(process.env.PORT ?? "3000"),
	g = (0, B.default)();
g.use((0, ae.default)(ie));
g.use(B.default.json());
g.use(l);
g.use(Q.error);
g.listen(ne, () => console.log(`server running on http://localhost:${ne}`));
