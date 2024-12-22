"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeControllers = exports.rootControllers = exports.registerControllers = exports.loginControllers = exports.authenticateUser = exports.verifyRegister = exports.verifyLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const joi_1 = __importDefault(require("joi"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../model/User"));
const authenticate_user_1 = __importDefault(require("../middlewares/authenticate-user"));
const verify_login_1 = __importDefault(require("../middlewares/verify-login"));
const verify_register_1 = __importDefault(require("../middlewares/verify-register"));
const generate_hash_1 = __importDefault(require("../util/generate-hash"));
const verify_datas_1 = __importDefault(require("../util/verify-datas"));
const encrypt_1 = __importDefault(require("../util/encrypt"));
const register_db_user_1 = __importDefault(require("../service/register-db-user"));
const login_db_user_1 = __importDefault(require("../service/login-db-user"));
const login_controllers_1 = __importDefault(require("../controllers/login-controllers"));
const register_controllers_1 = __importDefault(require("../controllers/register-controllers"));
const root_controllers_1 = __importDefault(require("../controllers/root-controllers"));
const welcome_controller_1 = __importDefault(require("../controllers/welcome-controller"));
const login_repository_1 = __importDefault(require("../repositories/login-repository"));
const register_repository_1 = __importDefault(require("../repositories/register-repository"));
const generateHash = new generate_hash_1.default(jsonwebtoken_1.default);
const encrypt = new encrypt_1.default(bcrypt_1.default);
const verifyDataUser = new verify_datas_1.default(joi_1.default);
const verifyLogin = new verify_login_1.default(verifyDataUser);
exports.verifyLogin = verifyLogin;
const verifyRegister = new verify_register_1.default(verifyDataUser);
exports.verifyRegister = verifyRegister;
const authenticateUser = new authenticate_user_1.default(generateHash);
exports.authenticateUser = authenticateUser;
const loginRepository = new login_repository_1.default(User_1.default);
const registerRepository = new register_repository_1.default(User_1.default);
const loginUserDb = new login_db_user_1.default(encrypt, loginRepository);
const registerUserDb = new register_db_user_1.default(encrypt, registerRepository);
const rootControllers = new root_controllers_1.default();
exports.rootControllers = rootControllers;
const loginControllers = new login_controllers_1.default(loginUserDb, generateHash);
exports.loginControllers = loginControllers;
const registerControllers = new register_controllers_1.default(registerUserDb);
exports.registerControllers = registerControllers;
const welcomeControllers = new welcome_controller_1.default();
exports.welcomeControllers = welcomeControllers;
