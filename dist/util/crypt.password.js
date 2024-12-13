"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = encryptPassword;
exports.passwordValidation = passwordValidation;
const bcrypt_1 = __importDefault(require("bcrypt"));
async function encryptPassword(password) {
    const salt = await bcrypt_1.default.genSalt(15);
    return await bcrypt_1.default.hash(password, salt);
}
async function passwordValidation(password, encrypted_password) {
    const response = await bcrypt_1.default.compare(password, encrypted_password);
    return response;
}
