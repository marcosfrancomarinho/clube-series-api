"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const express_1 = __importDefault(require("express"));
const login_router_1 = require("./login.router");
const register_router_1 = require("./register.router");
const root_router_1 = require("./root.router");
const welcome_router_1 = require("./welcome.router");
const routers = (0, express_1.default)();
exports.routers = routers;
routers.use("/signup", register_router_1.registerRouter);
routers.use("/login", login_router_1.loginRouter);
routers.use("/welcome", welcome_router_1.welcomeRouter);
routers.use("/", root_router_1.rootRouter);
