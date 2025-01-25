"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routers_1 = require("./routers/routers");
var cors_1 = __importDefault(require("cors"));
var cors_options_1 = require("./config/cors.options");
var instances_1 = require("./config/instances");
var port = Number((_a = process.env.PORT) !== null && _a !== void 0 ? _a : "3000");
var app = (0, express_1.default)();
app.use((0, cors_1.default)(cors_options_1.corsOptions));
app.use(express_1.default.json());
app.use(routers_1.routers);
app.use(instances_1.responseError.error);
app.listen(port, function () { return console.log("server running on http://localhost:".concat(port)); });
