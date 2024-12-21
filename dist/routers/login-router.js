"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instances_1 = require("../config/instances");
const routerLogin = (0, express_1.Router)();
routerLogin.post('/', instances_1.loginControllers.loginUser);
exports.default = routerLogin;
