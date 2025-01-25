"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
var express_1 = __importDefault(require("express"));
var instances_1 = require("../config/instances");
var rootRouter = (0, express_1.default)();
exports.rootRouter = rootRouter;
rootRouter.post("/", instances_1.authenticateUser.authenticationTokenUser, instances_1.pageInterfaceControllers.getDatasPageInterfaceDB);
rootRouter.get("/", instances_1.pageInterfaceControllers.getDatasPageInterfaceDB);
