"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthenticateUser {
    generateHash;
    constructor(generateHash) {
        this.generateHash = generateHash;
    }
    authenticationTokenUser(req, res, next) {
        try {
            const token = req.headers['authorization'];
            if (!token)
                throw new Error('token invalido');
            const response = this.generateHash.verify(token);
            res.locals.token = response;
            next();
        }
        catch (error) {
            const messageError = error.message;
            res.status(400).json({ error: messageError });
        }
    }
}
exports.default = AuthenticateUser;
