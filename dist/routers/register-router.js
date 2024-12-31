"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const instances_1 = require("../config/instances");
const routerRegister = (0, express_1.default)();
routerRegister.post('/', instances_1.verifyRegister.verifyDatasBodyUserRegister, instances_1.registerControllers.registerUser);
exports.default = routerRegister;
