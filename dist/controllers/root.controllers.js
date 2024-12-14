"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControllerRoot {
    accessAllowed(req, res) {
        res.json({ isLogin: true, status: 'acesso permitido' });
    }
}
exports.default = ControllerRoot;
