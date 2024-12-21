"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instances_1 = require("../config/instances");
const routerRegister = (0, express_1.Router)();
routerRegister.post('/', instances_1.registerControllers.siginUpUser);
exports.default = routerRegister;
