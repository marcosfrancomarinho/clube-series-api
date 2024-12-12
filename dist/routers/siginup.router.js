"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const siginup_controllers_1 = __importDefault(require("../controllers/siginup.controllers"));
const controllersSignUp = new siginup_controllers_1.default();
const routerSignUp = (0, express_1.Router)();
routerSignUp.post('/', controllersSignUp.siginUpUser);
exports.default = routerSignUp;
