"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../model/User"));
const crypt_password_1 = require("../util/crypt.password");
const registerUserDb = async (name, email, password) => {
    const messageSuccess = {
        ok: true,
        status: 'usuario cadastrado com sucesso',
    };
    try {
        const encryptedPassword = await (0, crypt_password_1.encryptPassword)(password);
        await User_1.default.create({
            name: name,
            email: email,
            password: encryptedPassword,
        });
        return messageSuccess;
    }
    catch (error) {
        throw error;
    }
};
exports.default = registerUserDb;
