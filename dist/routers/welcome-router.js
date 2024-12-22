"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instances_1 = require("../config/instances");
const routerWelcome = (0, express_1.Router)();
routerWelcome.get('/', instances_1.welcomeControllers.welcomeUser);
exports.default = routerWelcome;
