"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routers/index"));
const cors_1 = __importDefault(require("cors"));
const configCors = {
    methods: ['POST'],
    origin: '*',
    allowedHeaders: ['Authorization', 'Content-Type'],
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(configCors));
app.use(express_1.default.json());
app.use(index_1.default);
exports.default = app;
