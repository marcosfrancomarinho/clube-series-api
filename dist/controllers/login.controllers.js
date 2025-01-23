"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginControllers = void 0;
const request_model_1 = require("../util/request.model");
class LoginControllers extends request_model_1.RequestModel {
    loginUserDb;
    generateHash;
    constructor(loginUserDb, generateHash) {
        super();
        this.loginUserDb = loginUserDb;
        this.generateHash = generateHash;
    }
    loginUser = async (req, res, next) => {
        try {
            const datas = super.getDatasBodyLogin(req);
            const { id, email, ...response } = await this.loginUserDb.login(datas);
            const hash = this.generateHash.hash(email, id);
            res.status(200).setHeader("authorization", hash).json(response);
        }
        catch (error) {
            next(error);
        }
    };
}
exports.LoginControllers = LoginControllers;
