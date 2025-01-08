"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../model/user/user"));
class LoginAdapter {
    querySelectUser = async (email, retrievedData) => {
        const response = await user_1.default.findOne({
            attributes: retrievedData,
            where: {
                email: email,
            },
            raw: true,
        });
        return response;
    };
}
exports.default = LoginAdapter;
