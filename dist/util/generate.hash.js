"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateHash = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class GenerateHash {
    hash = (email, id) => {
        const keySecret = process.env.SECRET;
        if (!keySecret) {
            throw new Error("A variável de ambiente SECRET não está definida.");
        }
        const token = jsonwebtoken_1.default.sign({ email, id }, keySecret);
        return token;
    };
    verify = (token) => {
        const keySecret = process.env.SECRET;
        if (!keySecret) {
            throw new Error("A variável de ambiente SECRET não está definida.");
        }
        return jsonwebtoken_1.default.verify(token, keySecret);
    };
}
exports.GenerateHash = GenerateHash;
