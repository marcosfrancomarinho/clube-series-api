"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_router_1 = __importDefault(require("./routers/main-router"));
const cors_1 = __importDefault(require("cors"));
const cors_options_1 = require("./config/cors-options");
const instances_1 = require("./config/instances");
const app = (0, express_1.default)();
app.use((0, cors_1.default)(cors_options_1.corsOptions));
app.use(express_1.default.json());
app.use(main_router_1.default);
app.use(instances_1.responseError.error);
exports.default = app;
