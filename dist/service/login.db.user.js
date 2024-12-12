"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../model/User"));
const crypt_password_1 = require("../util/crypt.password");
const loginUserDb = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const messageError = 'Email ou senha inválida';
    try {
        const response = yield User_1.default.findOne({
            attributes: ['id', 'email', 'password'],
            where: {
                email: email,
            },
        });
        if (!response)
            throw new Error(messageError);
        const checkPassword = yield (0, crypt_password_1.passwordValidation)(password, response.password);
        if (!checkPassword)
            throw new Error(messageError);
        const messageSuccess = {
            ok: true,
            status: 'usuario logado com sucesso',
            email: email,
            id: response.id,
        };
        return messageSuccess;
    }
    catch (error) {
        throw error;
    }
});
exports.default = loginUserDb;
