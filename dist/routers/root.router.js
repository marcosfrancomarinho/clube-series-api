"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticate_user_1 = __importDefault(require("../middlewares/authenticate.user"));
const root_controllers_1 = __importDefault(require("../controllers/root.controllers"));
const routerRoot = (0, express_1.Router)();
const controllersRoot = new root_controllers_1.default();
routerRoot.post('/', authenticate_user_1.default, controllersRoot.accessAllowed);
exports.default = routerRoot;
