"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserMiddlewares = void 0;
const request_model_1 = require("../util/request.model");
class AuthenticateUserMiddlewares extends request_model_1.RequestModel {
    generateHash;
    constructor(generateHash) {
        super();
        this.generateHash = generateHash;
    }
    getToken(req) {
        const token = req.headers["authorization"];
        if (!token || token.trim().length === 0)
            throw new Error("token invalido");
        return token;
    }
    authenticationTokenUser = (req, res, next) => {
        try {
            const token = this.getToken(req);
            const response = this.generateHash.verify(token);
            res.locals.token = response;
            next();
        }
        catch (error) {
            res.status(400).json(super.messageError(error));
        }
    };
}
exports.AuthenticateUserMiddlewares = AuthenticateUserMiddlewares;
