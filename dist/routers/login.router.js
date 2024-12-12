"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controllers_1 = __importDefault(require("../controllers/login.controllers"));
const controllersLogin = new login_controllers_1.default();
const routerLogin = (0, express_1.Router)();
routerLogin.post('/', controllersLogin.loginUser);
exports.default = routerLogin;
