"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControllersLogin {
    loginUserDb;
    generateHash;
    constructor(loginUserDb, generateHash) {
        this.loginUserDb = loginUserDb;
        this.generateHash = generateHash;
    }
    loginUser = async (req, res) => {
        try {
            const { email, password } = req.body;
            const { ok, status, id, name } = await this.loginUserDb.login(email, password);
            if (!id)
                throw new Error('ID não informado para geração do Token');
            const hash = this.generateHash.hash(email, id);
            res.status(200).setHeader('authorization', hash).json({ ok, status, name });
        }
        catch (error) {
            const messageError = error.message;
            res.status(400).json({ error: messageError });
        }
    };
}
exports.default = ControllersLogin;
