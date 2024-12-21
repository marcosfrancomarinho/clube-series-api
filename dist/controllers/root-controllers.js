"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootControllres {
    accessAllowed = (req, res) => {
        res.json({ isLogin: true, status: 'acesso permitido' });
    };
}
exports.default = RootControllres;
