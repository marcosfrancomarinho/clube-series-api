"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginDbUser {
    encrypt;
    user;
    messageError = 'Email ou senha inválida';
    attribute = ['id', 'email', 'password'];
    constructor(encrypt, user) {
        this.encrypt = encrypt;
        this.user = user;
    }
    messageSuccess = ({ email, id }) => {
        return {
            ok: true,
            status: 'usuario logado com sucesso',
            email,
            id,
        };
    };
    login = async ({ email, password, }) => {
        try {
            const response = await this.user.findOne({
                attributes: this.attribute,
                where: {
                    email: email,
                },
                raw: true,
            });
            if (!response)
                throw new Error(this.messageError);
            const checkPassword = await this.encrypt.passwordValidation(password, response.password);
            if (!checkPassword)
                throw new Error(this.messageError);
            return this.messageSuccess(response);
        }
        catch (error) {
            throw error;
        }
    };
}
exports.default = LoginDbUser;
