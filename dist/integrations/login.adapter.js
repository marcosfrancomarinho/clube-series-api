"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAdapter = void 0;
const user_model_1 = require("../model/user.model");
class LoginAdapter {
    querySelectUser = async (email, retrievedData) => {
        const response = await user_model_1.User.findOne({
            attributes: retrievedData,
            where: {
                email: email,
            },
            raw: true,
        });
        return response;
    };
}
exports.LoginAdapter = LoginAdapter;
