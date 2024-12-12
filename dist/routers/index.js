"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_router_1 = __importDefault(require("./login.router"));
const siginup_router_1 = __importDefault(require("./siginup.router"));
const verify_login_1 = __importDefault(require("../middlewares/verify.login"));
const verify_register_1 = __importDefault(require("../middlewares/verify.register"));
const authenticate_user_1 = __importDefault(require("../middlewares/authenticate.user"));
const teste_router_1 = __importDefault(require("./teste.router"));
const router = (0, express_1.Router)();
router.use('/login', verify_login_1.default, login_router_1.default);
router.use('/signup', verify_register_1.default, siginup_router_1.default);
router.use('/teste', authenticate_user_1.default, teste_router_1.default);
exports.default = router;
