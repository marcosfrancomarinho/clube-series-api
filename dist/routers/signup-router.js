"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup_controllers_1 = __importDefault(require("../controllers/signup-controllers"));
const register_db_user_1 = __importDefault(require("../service/register-db-user"));
const encrypt_1 = __importDefault(require("../util/encrypt"));
const User_1 = __importDefault(require("../model/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const encrypt = new encrypt_1.default(bcrypt_1.default);
const registerUserDb = new register_db_user_1.default(encrypt, User_1.default);
const controllersSignUp = new signup_controllers_1.default(registerUserDb);
const routerSignUp = (0, express_1.Router)();
routerSignUp.post('/', controllersSignUp.siginUpUser);
exports.default = routerSignUp;
