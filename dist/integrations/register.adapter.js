"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdapter = void 0;
const user_model_1 = require("../model/user.model");
class RegisterAdapter {
    queryCreateUser = async (name, email, password) => {
        await user_model_1.User.create({
            name,
            email,
            password,
        });
    };
}
exports.RegisterAdapter = RegisterAdapter;
