"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(require("../model/Request"));
class AuthenticateUser extends Request_1.default {
    generateHash;
    constructor(generateHash) {
        super();
        this.generateHash = generateHash;
    }
    getToken(req) {
        const token = req.headers['authorization'];
        if (!token || token.trim().length === 0)
            throw new Error('token invalido');
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
exports.default = AuthenticateUser;
