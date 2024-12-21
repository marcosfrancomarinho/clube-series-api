"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SignUpControllers {
    registerUserDb;
    constructor(registerUserDb) {
        this.registerUserDb = registerUserDb;
    }
    siginUpUser = async (req, res) => {
        try {
            const { name, email, password } = req.body;
            console.log(email);
            const response = await this.registerUserDb.register(name, email, password);
            res.status(200).json(response);
        }
        catch (error) {
            const messageError = error.message;
            res.status(400).json({ error: messageError });
        }
    };
}
exports.default = SignUpControllers;
