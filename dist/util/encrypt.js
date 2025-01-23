"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encrypt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class Encrypt {
    encryptPassword = async (password) => {
        const salt = await bcrypt_1.default.genSalt(15);
        return await bcrypt_1.default.hash(password, salt);
    };
    passwordValidation = async (password, encrypted_password) => {
        const response = await bcrypt_1.default.compare(password, encrypted_password);
        return response;
    };
}
exports.Encrypt = Encrypt;
