"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
var express_1 = __importDefault(require("express"));
var login_router_1 = require("./login.router");
var register_router_1 = require("./register.router");
var root_router_1 = require("./root.router");
var welcome_router_1 = require("./welcome.router");
var routers = (0, express_1.default)();
exports.routers = routers;
routers.use("/signup", register_router_1.registerRouter);
routers.use("/login", login_router_1.loginRouter);
routers.use("/welcome", welcome_router_1.welcomeRouter);
routers.use("/", root_router_1.rootRouter);
