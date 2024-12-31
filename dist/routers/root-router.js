"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const instances_1 = require("../config/instances");
const routerRoot = (0, express_1.default)();
routerRoot.post('/', instances_1.authenticateUser.authenticationTokenUser, instances_1.pageInterfaceControllers.getDatasPageInterfaceDB);
routerRoot.get('/', instances_1.pageInterfaceControllers.getDatasPageInterfaceDB);
exports.default = routerRoot;
