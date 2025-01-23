"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyRegisterMiddlewares = void 0;
const request_model_1 = require("../util/request.model");
class VerifyRegisterMiddlewares extends request_model_1.RequestModel {
    verifyDatasUser;
    constructor(verifyDatasUser) {
        super();
        this.verifyDatasUser = verifyDatasUser;
    }
    verifyDatasBodyUserRegister = (req, res, next) => {
        try {
            const { name, email, password } = super.getDatasBodyRegister(req);
            this.verifyDatasUser.registerUser(name, email, password);
            next();
        }
        catch (error) {
            res.status(400).json(super.messageError(error));
        }
    };
}
exports.VerifyRegisterMiddlewares = VerifyRegisterMiddlewares;
