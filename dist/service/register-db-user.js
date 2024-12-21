"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterDbUser {
    encrypt;
    user;
    messageSuccess = {
        ok: true,
        status: 'usuario cadastrado com sucesso',
    };
    constructor(encrypt, user) {
        (this.encrypt = encrypt), (this.user = user);
    }
    register = async ({ name, email, password, }) => {
        try {
            const encryptedPassword = await this.encrypt.encryptPassword(password);
            await this.user.create({
                name: name,
                email: email,
                password: encryptedPassword,
            });
            return this.messageSuccess;
        }
        catch (error) {
            throw error;
        }
    };
}
exports.default = RegisterDbUser;
