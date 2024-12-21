"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_model_1 = __importDefault(require("../util/request-model"));
class LoginControllers extends request_model_1.default {
    loginUserDb;
    generateHash;
    constructor(loginUserDb, generateHash) {
        super();
        this.loginUserDb = loginUserDb;
        this.generateHash = generateHash;
    }
    loginUser = async (req, res) => {
        try {
            const datas = super.getDatasBodyLogin(req);
            const { id, email, ...response } = await this.loginUserDb.login(datas);
            const hash = this.generateHash.hash(email, id);
            res.status(200).setHeader('authorization', hash).json(response);
        }
        catch (error) {
            res.status(400).json(super.messageError(error));
        }
    };
}
exports.default = LoginControllers;
