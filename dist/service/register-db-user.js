"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterDbUser {
    encrypt;
    registerRepository;
    messageSuccess;
    constructor(encrypt, registerRepository) {
        this.encrypt = encrypt;
        this.registerRepository = registerRepository;
        this.messageSuccess = {
            ok: true,
            status: 'usuario cadastrado com sucesso',
        };
    }
    register = async ({ name, email, password, }) => {
        try {
            const encryptedPassword = await this.encrypt.encryptPassword(password);
            await this.registerRepository.queryCreateUser(name, email, encryptedPassword);
            return this.messageSuccess;
        }
        catch (error) {
            throw error;
        }
    };
}
exports.default = RegisterDbUser;
