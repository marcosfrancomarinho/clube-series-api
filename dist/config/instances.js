"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllersRoot = exports.controllersSignUp = exports.controllersLogin = exports.authenticateUser = exports.verifyRegister = exports.verifyLogin = void 0;
const authenticate_user_1 = __importDefault(require("../middlewares/authenticate-user"));
const verify_login_1 = __importDefault(require("../middlewares/verify-login"));
const verify_register_1 = __importDefault(require("../middlewares/verify-register"));
const generate_hash_1 = __importDefault(require("../util/generate-hash"));
const verify_datas_1 = __importDefault(require("../util/verify-datas"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const encrypt_1 = __importDefault(require("../util/encrypt"));
const login_db_user_1 = __importDefault(require("../service/login-db-user"));
const login_controllers_1 = __importDefault(require("../controllers/login-controllers"));
const User_1 = __importDefault(require("../model/User"));
const register_db_user_1 = __importDefault(require("../service/register-db-user"));
const signup_controllers_1 = __importDefault(require("../controllers/signup-controllers"));
const root_controllers_1 = __importDefault(require("../controllers/root-controllers"));
const controllersRoot = new root_controllers_1.default();
exports.controllersRoot = controllersRoot;
const generateHash = new generate_hash_1.default(jsonwebtoken_1.default);
const verifyDataUser = new verify_datas_1.default();
const verifyLogin = new verify_login_1.default(verifyDataUser);
exports.verifyLogin = verifyLogin;
const verifyRegister = new verify_register_1.default(verifyDataUser);
exports.verifyRegister = verifyRegister;
const authenticateUser = new authenticate_user_1.default(generateHash);
exports.authenticateUser = authenticateUser;
const encrypt = new encrypt_1.default(bcrypt_1.default);
const loginUserDb = new login_db_user_1.default(encrypt, User_1.default);
const registerUserDb = new register_db_user_1.default(encrypt, User_1.default);
const controllersLogin = new login_controllers_1.default(loginUserDb, generateHash);
exports.controllersLogin = controllersLogin;
const controllersSignUp = new signup_controllers_1.default(registerUserDb);
exports.controllersSignUp = controllersSignUp;
