"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDbUserServices = void 0;
class LoginDbUserServices {
    encrypt;
    loginAdapter;
    constructor(encrypt, loginAdapter) {
        this.encrypt = encrypt;
        this.loginAdapter = loginAdapter;
    }
    message = {
        success: ({ email, id }) => {
            return {
                ok: true,
                status: "usuario logado com sucesso",
                email,
                id,
            };
        },
        error: "email ou senha inválida",
    };
    login = async ({ email, password }) => {
        try {
            const response = await this.loginAdapter.querySelectUser(email);
            if (!response)
                throw new Error(this.message.error);
            const checkPassword = await this.encrypt.passwordValidation(password, response.password);
            if (!checkPassword)
                throw new Error(this.message.error);
            return this.message.success(response);
        }
        catch (error) {
            throw error;
        }
    };
}
exports.LoginDbUserServices = LoginDbUserServices;
