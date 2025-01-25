"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRouter = void 0;
var express_1 = __importDefault(require("express"));
var instances_1 = require("../config/instances");
var registerRouter = (0, express_1.default)();
exports.registerRouter = registerRouter;
registerRouter.post("/", instances_1.verifyRegister.verifyDatasBodyUserRegister, instances_1.registerControllers.registerUser);
