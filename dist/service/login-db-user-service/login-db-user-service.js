"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginDbUserService {
    encrypt;
    loginRepository;
    messageError;
    attribute;
    constructor(encrypt, loginRepository) {
        this.encrypt = encrypt;
        this.loginRepository = loginRepository;
        this.messageError = 'Email ou senha inválida';
        this.attribute = ['id', 'email', 'password'];
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
            const response = await this.loginRepository.querySelectUser(email, this.attribute);
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
