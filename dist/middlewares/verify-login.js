"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerifyLogin {
    verifyDatasUser;
    constructor(verifyDatasUser) {
        this.verifyDatasUser = verifyDatasUser;
    }
    verifyDatasBodyUserLogin = (req, res, next) => {
        try {
            const { email, password } = req.body;
            this.verifyDatasUser.loginUser(email, password);
            next();
        }
        catch (error) {
            const messageError = error.message;
            res.status(400).json({ error: messageError });
        }
    };
}
exports.default = VerifyLogin;
