"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = exports.pageInterfaceControllers = exports.welcomeControllers = exports.registerControllers = exports.loginControllers = exports.authenticateUser = exports.verifyRegister = exports.verifyLogin = void 0;
var generate_hash_1 = require("../util/generate.hash");
var encrypt_1 = require("../util/encrypt");
var verify_datas_user_1 = require("../util/verify.datas.user");
var verify_register_middlewares_1 = require("../middlewares/verify.register.middlewares");
var authenticate_user_middlewares_1 = require("../middlewares/authenticate.user.middlewares");
var response_error_middlewares_1 = require("../middlewares/response.error.middlewares");
var verify_login_middlewares_1 = require("../middlewares/verify.login.middlewares");
var structure_select_adapter_1 = require("../integrations/structure.select.adapter");
var structure_select_formater_adapter_1 = require("../integrations/structure.select.formater.adapter");
var login_adapter_1 = require("../integrations/login.adapter");
var register_adapter_1 = require("../integrations/register.adapter");
var login_db_user_services_1 = require("../service/login.db.user.services");
var register_db_user_services_1 = require("../service/register.db.user.services");
var structure_db_select_services_1 = require("../service/structure.db.select.services");
var login_controllers_1 = require("../controllers/login.controllers");
var register_controllers_1 = require("../controllers/register.controllers");
var welcome_controllers_1 = require("../controllers/welcome.controllers");
var pageInterface_controllers_1 = require("../controllers/pageInterface.controllers");
var option_query_select_attributes_db_1 = require("./option.query.select.attributes.db");
var structureSelectAdapterFooter = new structure_select_adapter_1.StructureSelectAdapter("structure_footer");
var structureSelectAdapterImages = new structure_select_adapter_1.StructureSelectAdapter("structure_images");
var structureSelectAdapterMenu = new structure_select_adapter_1.StructureSelectAdapter("structure_menu");
var structureSelectFormaterAdapter = new structure_select_formater_adapter_1.StructureSelectFormaterAdapter(structureSelectAdapterMenu);
var structureDbSelectServices = new structure_db_select_services_1.StructureDbSelectServices(structureSelectAdapterFooter, structureSelectAdapterImages, structureSelectFormaterAdapter);
var pageInterfaceControllers = new pageInterface_controllers_1.PageInterfaceControllers(structureDbSelectServices, option_query_select_attributes_db_1.option_query_select_attributes_db);
exports.pageInterfaceControllers = pageInterfaceControllers;
var generateHash = new generate_hash_1.GenerateHash();
var encrypt = new encrypt_1.Encrypt();
var verifyDataUser = new verify_datas_user_1.VerifyDatasUser();
var verifyLogin = new verify_login_middlewares_1.VerifyLoginMiddlewares(verifyDataUser);
exports.verifyLogin = verifyLogin;
var verifyRegister = new verify_register_middlewares_1.VerifyRegisterMiddlewares(verifyDataUser);
exports.verifyRegister = verifyRegister;
var authenticateUser = new authenticate_user_middlewares_1.AuthenticateUserMiddlewares(generateHash);
exports.authenticateUser = authenticateUser;
var responseError = new response_error_middlewares_1.ResponseErrorMiddlewares();
exports.responseError = responseError;
var registerAdapter = new register_adapter_1.RegisterAdapter();
var loginAdapter = new login_adapter_1.LoginAdapter();
var loginUserDbService = new login_db_user_services_1.LoginDbUserServices(encrypt, loginAdapter);
var registerUserDbService = new register_db_user_services_1.RegisterDbUserServices(encrypt, registerAdapter);
var loginControllers = new login_controllers_1.LoginControllers(loginUserDbService, generateHash);
exports.loginControllers = loginControllers;
var registerControllers = new register_controllers_1.RegisterControllers(registerUserDbService);
exports.registerControllers = registerControllers;
var welcomeControllers = new welcome_controllers_1.WelcomeControllers();
exports.welcomeControllers = welcomeControllers;
