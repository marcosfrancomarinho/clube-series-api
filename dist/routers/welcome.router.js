"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeRouter = void 0;
const express_1 = __importDefault(require("express"));
const instances_1 = require("../config/instances");
const welcomeRouter = (0, express_1.default)();
exports.welcomeRouter = welcomeRouter;
welcomeRouter.get("/", instances_1.welcomeControllers.welcomeUser);
