"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_router_1 = __importDefault(require("./login-router"));
const register_router_1 = __importDefault(require("./register-router"));
const root_router_1 = __importDefault(require("./root-router"));
const instances_1 = require("../config/instances");
const router = (0, express_1.Router)();
router.use('/login', instances_1.verifyLogin.verifyDatasBodyUserLogin, login_router_1.default);
router.use('/signup', instances_1.verifyRegister.verifyDatasBodyUserRegister, register_router_1.default);
router.use('/', instances_1.authenticateUser.authenticationTokenUser, root_router_1.default);
exports.default = router;
