"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateHash = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var GenerateHash = (function () {
    function GenerateHash() {
        this.hash = function (email, id) {
            var keySecret = process.env.SECRET;
            if (!keySecret) {
                throw new Error("A variável de ambiente SECRET não está definida.");
            }
            var token = jsonwebtoken_1.default.sign({ email: email, id: id }, keySecret);
            return token;
        };
        this.verify = function (token) {
            var keySecret = process.env.SECRET;
            if (!keySecret) {
                throw new Error("A variável de ambiente SECRET não está definida.");
            }
            return jsonwebtoken_1.default.verify(token, keySecret);
        };
    }
    return GenerateHash;
}());
exports.GenerateHash = GenerateHash;
