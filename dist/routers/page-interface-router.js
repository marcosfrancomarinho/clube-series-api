"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instances_1 = require("../config/instances");
const routerPageInterface = (0, express_1.Router)();
routerPageInterface.get('/', instances_1.pageInterfaceControllers.getDatasPageInterfaceDB);
exports.default = routerPageInterface;
