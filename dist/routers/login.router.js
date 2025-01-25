"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
var express_1 = __importDefault(require("express"));
var instances_1 = require("../config/instances");
var loginRouter = (0, express_1.default)();
exports.loginRouter = loginRouter;
loginRouter.post("/", instances_1.verifyLogin.verifyDatasBodyUserLogin, instances_1.loginControllers.loginUser);
