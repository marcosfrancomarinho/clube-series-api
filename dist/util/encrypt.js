"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Encrypt {
    crypt;
    constructor(crypt) {
        this.crypt = crypt;
    }
    encryptPassword = async (password) => {
        const salt = await this.crypt.genSalt(15);
        return await this.crypt.hash(password, salt);
    };
    passwordValidation = async (password, encrypted_password) => {
        const response = await this.crypt.compare(password, encrypted_password);
        return response;
    };
}
exports.default = Encrypt;
