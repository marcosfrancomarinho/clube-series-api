"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_db_user_1 = __importDefault(require("../service/login.db.user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class ControllersLogin {
    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const { ok, status, id } = await (0, login_db_user_1.default)(email, password);
            const keyScret = process.env.SECRET;
            const hash = jsonwebtoken_1.default.sign({ email, id }, keyScret, { expiresIn: 60, });
            res.status(200).setHeader('authorization', hash).json({ ok, status });
        }
        catch (error) {
            const messageError = error.message;
            res.status(400).json({ error: messageError });
        }
    }
}
exports.default = ControllersLogin;
