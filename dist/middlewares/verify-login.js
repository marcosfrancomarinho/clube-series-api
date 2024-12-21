"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(require("../model/Request"));
class VerifyLogin extends Request_1.default {
    verifyDatasUser;
    constructor(verifyDatasUser) {
        super();
        this.verifyDatasUser = verifyDatasUser;
    }
    verifyDatasBodyUserLogin = (req, res, next) => {
        try {
            const { email, password } = super.getDatasBodyLogin(req);
            this.verifyDatasUser.loginUser(email, password);
            next();
        }
        catch (error) {
            res.status(400).json(super.messageError(error));
        }
    };
}
exports.default = VerifyLogin;
