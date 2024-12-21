"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginDbUser {
    encrypt;
    user;
    constructor(encrypt, user) {
        this.encrypt = encrypt;
        this.user = user;
    }
    login = async (email, password) => {
        const messageError = 'Email ou senha inválida';
        try {
            const response = await this.user.findOne({
                attributes: ['id', 'name', 'password'],
                where: {
                    email: email,
                },
                raw: true,
            });
            if (!response)
                throw new Error(messageError);
            const checkPassword = await this.encrypt.passwordValidation(password, response.password);
            if (!checkPassword)
                throw new Error(messageError);
            const messageSuccess = {
                ok: true,
                status: 'usuario logado com sucesso',
                name: response.name,
                id: response.id,
            };
            return messageSuccess;
        }
        catch (error) {
            throw error;
        }
    };
}
exports.default = LoginDbUser;
