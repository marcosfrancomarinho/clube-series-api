"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verify_datas_1 = __importDefault(require("../util/verify.datas"));
const verify = new verify_datas_1.default();
function verifyDatasBodyUserLogin(req, res, next) {
    try {
        const { email, password } = req.body;
        verify.loginUser(email, password);
        next();
    }
    catch (error) {
        const messageError = error.message;
        res.status(400).json({ error: messageError });
    }
}
exports.default = verifyDatasBodyUserLogin;
