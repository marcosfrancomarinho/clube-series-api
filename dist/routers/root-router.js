"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const root_controllers_1 = __importDefault(require("../controllers/root-controllers"));
const rootControllers = new root_controllers_1.default();
const routerRoot = (0, express_1.Router)();
const controllersRoot = new root_controllers_1.default();
routerRoot.post('/', rootControllers.accessAllowed, controllersRoot.accessAllowed);
exports.default = routerRoot;
