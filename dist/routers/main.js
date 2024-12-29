"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_router_1 = __importDefault(require("./login-router"));
const register_router_1 = __importDefault(require("./register-router"));
const root_router_1 = __importDefault(require("./root-router"));
const welcome_router_1 = __importDefault(require("./welcome-router"));
const router = (0, express_1.Router)();
router.use('/login', login_router_1.default);
router.use('/signup', register_router_1.default);
router.use('/welcome', welcome_router_1.default);
router.use('/', root_router_1.default);
exports.default = router;
