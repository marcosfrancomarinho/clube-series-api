"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDbUserServices = void 0;
class RegisterDbUserServices {
    encrypt;
    registerAdapter;
    messageSuccess = {
        ok: true,
        status: "usuario cadastrado com sucesso",
    };
    constructor(encrypt, registerAdapter) {
        this.encrypt = encrypt;
        this.registerAdapter = registerAdapter;
    }
    register = async ({ name, email, password, }) => {
        try {
            const encryptedPassword = await this.encrypt.encryptPassword(password);
            await this.registerAdapter.queryCreateUser(name, email, encryptedPassword);
            return this.messageSuccess;
        }
        catch (error) {
            throw error;
        }
    };
}
exports.RegisterDbUserServices = RegisterDbUserServices;
