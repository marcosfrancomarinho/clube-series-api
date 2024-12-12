"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testeUserAuthenticate(req, res) {
    console.log(res.locals.token);
    res.json({ msg: 'teste ok - acesso permitido' });
}
exports.default = testeUserAuthenticate;
