"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const instances_1 = require("../config/instances");
const routerWelcome = (0, express_1.default)();
routerWelcome.get('/', instances_1.welcomeControllers.welcomeUser);
exports.default = routerWelcome;
