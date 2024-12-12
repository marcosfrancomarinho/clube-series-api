"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teste_controllers_1 = __importDefault(require("../controllers/teste.controllers"));
const testeRouter = (0, express_1.Router)();
testeRouter.post('/', teste_controllers_1.default);
exports.default = testeRouter;
