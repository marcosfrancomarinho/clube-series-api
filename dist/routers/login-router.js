"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const instances_1 = require("../config/instances");
const routerLogin = (0, express_1.default)();
routerLogin.post('/', instances_1.verifyLogin.verifyDatasBodyUserLogin, instances_1.loginControllers.loginUser);
exports.default = routerLogin;
