"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = exports.pageInterfaceControllers = exports.welcomeControllers = exports.registerControllers = exports.loginControllers = exports.authenticateUser = exports.verifyRegister = exports.verifyLogin = void 0;
const generate_hash_1 = require("../util/generate.hash");
const encrypt_1 = require("../util/encrypt");
const verify_datas_user_1 = require("../util/verify.datas.user");
const verify_register_middlewares_1 = require("../middlewares/verify.register.middlewares");
const authenticate_user_middlewares_1 = require("../middlewares/authenticate.user.middlewares");
const response_error_middlewares_1 = require("../middlewares/response.error.middlewares");
const verify_login_middlewares_1 = require("../middlewares/verify.login.middlewares");
const structure_select_adapter_1 = require("../integrations/structure.select.adapter");
const structure_select_formater_adapter_1 = require("../integrations/structure.select.formater.adapter");
const login_adapter_1 = require("../integrations/login.adapter");
const register_adapter_1 = require("../integrations/register.adapter");
const login_db_user_services_1 = require("../service/login.db.user.services");
const register_db_user_services_1 = require("../service/register.db.user.services");
const structure_db_select_services_1 = require("../service/structure.db.select.services");
const login_controllers_1 = require("../controllers/login.controllers");
const register_controllers_1 = require("../controllers/register.controllers");
const welcome_controllers_1 = require("../controllers/welcome.controllers");
const pageInterface_controllers_1 = require("../controllers/pageInterface.controllers");
const option_query_select_attributes_db_1 = require("./option.query.select.attributes.db");
const structureSelectAdapterFooter = new structure_select_adapter_1.StructureSelectAdapter("structure_footer");
const structureSelectAdapterImages = new structure_select_adapter_1.StructureSelectAdapter("structure_images");
const structureSelectAdapterMenu = new structure_select_adapter_1.StructureSelectAdapter("structure_menu");
const structureSelectFormaterAdapter = new structure_select_formater_adapter_1.StructureSelectFormaterAdapter(structureSelectAdapterMenu);
const structureDbSelectServices = new structure_db_select_services_1.StructureDbSelectServices(structureSelectAdapterFooter, structureSelectAdapterImages, structureSelectFormaterAdapter);
const pageInterfaceControllers = new pageInterface_controllers_1.PageInterfaceControllers(structureDbSelectServices, option_query_select_attributes_db_1.option_query_select_attributes_db);
exports.pageInterfaceControllers = pageInterfaceControllers;
const generateHash = new generate_hash_1.GenerateHash();
const encrypt = new encrypt_1.Encrypt();
const verifyDataUser = new verify_datas_user_1.VerifyDatasUser();
const verifyLogin = new verify_login_middlewares_1.VerifyLoginMiddlewares(verifyDataUser);
exports.verifyLogin = verifyLogin;
const verifyRegister = new verify_register_middlewares_1.VerifyRegisterMiddlewares(verifyDataUser);
exports.verifyRegister = verifyRegister;
const authenticateUser = new authenticate_user_middlewares_1.AuthenticateUserMiddlewares(generateHash);
exports.authenticateUser = authenticateUser;
const responseError = new response_error_middlewares_1.ResponseErrorMiddlewares();
exports.responseError = responseError;
const registerAdapter = new register_adapter_1.RegisterAdapter();
const loginAdapter = new login_adapter_1.LoginAdapter();
const loginUserDbService = new login_db_user_services_1.LoginDbUserServices(encrypt, loginAdapter);
const registerUserDbService = new register_db_user_services_1.RegisterDbUserServices(encrypt, registerAdapter);
const loginControllers = new login_controllers_1.LoginControllers(loginUserDbService, generateHash);
exports.loginControllers = loginControllers;
const registerControllers = new register_controllers_1.RegisterControllers(registerUserDbService);
exports.registerControllers = registerControllers;
const welcomeControllers = new welcome_controllers_1.WelcomeControllers();
exports.welcomeControllers = welcomeControllers;
