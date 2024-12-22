"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instances_1 = require("../config/instances");
const routerRegister = (0, express_1.Router)();
routerRegister.post('/', instances_1.verifyRegister.verifyDatasBodyUserRegister, instances_1.registerControllers.registerUser);
exports.default = routerRegister;
