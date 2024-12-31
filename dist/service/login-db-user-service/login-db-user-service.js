"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginDbUserService {
    encrypt;
    loginAdapter;
    messageError = 'Email ou senha inválida';
    attribute = ['id', 'email', 'password'];
    constructor(encrypt, loginAdapter) {
        this.encrypt = encrypt;
        this.loginAdapter = loginAdapter;
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
            const response = await this.loginAdapter.querySelectUser(email, this.attribute);
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
exports.default = LoginDbUserService;
