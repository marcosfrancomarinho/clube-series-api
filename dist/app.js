"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers/routers");
const cors_1 = __importDefault(require("cors"));
const cors_options_1 = require("./config/cors.options");
const instances_1 = require("./config/instances");
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)(cors_options_1.corsOptions));
app.use(express_1.default.json());
app.use(routers_1.routers);
app.use(instances_1.responseError.error);
