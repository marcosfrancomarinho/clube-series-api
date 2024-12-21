"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerifyRegister {
    VerifyDatasUser;
    constructor(VerifyDatasUser) {
        this.VerifyDatasUser = VerifyDatasUser;
    }
    verifyDatasBodyUserRegister = (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            this.VerifyDatasUser.registerUser(name, email, password);
            next();
        }
        catch (error) {
            const messageError = error.message;
            res.status(400).json({ error: messageError });
        }
    };
}
exports.default = VerifyRegister;
