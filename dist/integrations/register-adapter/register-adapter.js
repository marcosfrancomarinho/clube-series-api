"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../model/user/user"));
class RegisterAdapter {
    queryCreateUser = async (name, email, password) => {
        await user_1.default.create({
            name,
            email,
            password,
        });
    };
}
exports.default = RegisterAdapter;
