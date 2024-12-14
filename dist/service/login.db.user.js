"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../model/User"));
const crypt_password_1 = require("../util/crypt.password");
const loginUserDb = async (email, password) => {
    const messageError = 'Email ou senha inválida';
    try {
        const response = await User_1.default.findOne({
            attributes: ['id', 'name', 'password'],
            where: {
                email: email,
            },
            raw: true,
        });
        if (!response)
            throw new Error(messageError);
        const checkPassword = await (0, crypt_password_1.passwordValidation)(password, response.password);
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
exports.default = loginUserDb;
