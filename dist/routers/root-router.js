"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instances_1 = require("../config/instances");
const routerRoot = (0, express_1.Router)();
routerRoot.post('/', instances_1.controllersRoot.accessAllowed);
exports.default = routerRoot;
