"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class GenerateHash {
    jwt;
    constructor(jwt) {
        this.jwt = jwt;
    }
    hash(email, id) {
        const keySecret = process.env.SECRET;
        if (!keySecret) {
            throw new Error('A variável de ambiente SECRET não está definida.');
        }
        const token = this.jwt.sign({ email, id }, keySecret);
        return token;
    }
    verify(token) {
        const keySecret = process.env.SECRET;
        if (!keySecret) {
            throw new Error('A variável de ambiente SECRET não está definida.');
        }
        return this.jwt.verify(token, keySecret);
    }
}
exports.default = GenerateHash;
