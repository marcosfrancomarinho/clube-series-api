"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_db_user_1 = __importDefault(require("../service/register.db.user"));
class ControllerSiginUp {
    async siginUpUser(req, res) {
        try {
            const { name, email, password } = req.body;
            const response = await (0, register_db_user_1.default)(name, email, password);
            res.status(200).json(response);
        }
        catch (error) {
            const messageError = error.message;
            res.status(400).json({ error: messageError });
        }
    }
}
exports.default = ControllerSiginUp;
