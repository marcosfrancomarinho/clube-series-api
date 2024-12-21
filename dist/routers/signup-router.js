"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instances_1 = require("../config/instances");
const routerSignUp = (0, express_1.Router)();
routerSignUp.post('/', instances_1.controllersSignUp.siginUpUser);
exports.default = routerSignUp;
