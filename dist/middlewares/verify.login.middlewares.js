"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyLoginMiddlewares = void 0;
const request_model_1 = require("../util/request.model");
class VerifyLoginMiddlewares extends request_model_1.RequestModel {
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
exports.VerifyLoginMiddlewares = VerifyLoginMiddlewares;
