// Utilitários
import { GenerateHash } from "../util/generate.hash";
import { Encrypt } from "../util/encrypt";
import { VerifyDatasUser } from "../util/verify.datas.user";

// Middlewares
import { VerifyRegisterMiddlewares } from "../middlewares/verify.register.middlewares";
import { AuthenticateUserMiddlewares } from "../middlewares/authenticate.user.middlewares";
import { ResponseErrorMiddlewares } from "../middlewares/response.error.middlewares";
import { VerifyLoginMiddlewares } from "../middlewares/verify.login.middlewares";

// Adaptadores
import { StructureSelectAdapter } from "../integrations/structure.select.adapter";
import { LoginAdapter } from "../integrations/login.adapter";
import { RegisterAdapter } from "../integrations/register.adapter";

// Serviços
import { LoginDbUserServices } from "../services/login.db.user.services";
import { RegisterDbUserServices } from "../services/register.db.user.services";
import { StructureDbSelectServices } from "../services/structure.db.select.services";

// Controladores
import { LoginControllers } from "../controllers/login.controllers";
import { RegisterControllers } from "../controllers/register.controllers";
import { WelcomeControllers } from "../controllers/welcome.controllers";
import { PageInterfaceControllers } from "../controllers/pageInterface.controllers";

// Configuração adicional
import { option_query_select_attributes_db } from "./option.query.select.attributes.db";
import { FormatObject } from "../util/format.object";
import { IStructureFooter, IStructureImages, IStructureMenu } from "../@types/model/structure.model";

// Adaptadores de estruturas
const { footer, images, menu } = option_query_select_attributes_db;

const structureSelectAdapterFooter = new StructureSelectAdapter<IStructureFooter>(footer);
const structureSelectAdapterImages = new StructureSelectAdapter<IStructureImages>(images);
const structureSelectAdapterMenu = new StructureSelectAdapter<IStructureMenu>(menu);

const formatObject = new FormatObject();

// Serviço de seleção no banco de dados
const structureDbSelectServices = new StructureDbSelectServices(formatObject);
structureDbSelectServices.addAdapter(structureSelectAdapterFooter, structureSelectAdapterImages, structureSelectAdapterMenu);

// Controlador de interface de páginas
const pageInterfaceControllers = new PageInterfaceControllers(structureDbSelectServices);

// Instâncias de utilitários
const generateHash = new GenerateHash();
const encrypt = new Encrypt();
const verifyDataUser = new VerifyDatasUser();

// Middlewares
const verifyLogin = new VerifyLoginMiddlewares(verifyDataUser);
const verifyRegister = new VerifyRegisterMiddlewares(verifyDataUser);
const authenticateUser = new AuthenticateUserMiddlewares(generateHash);
const responseError = new ResponseErrorMiddlewares();

// Adaptadores de banco de dados
const registerAdapter = new RegisterAdapter();
const loginAdapter = new LoginAdapter();

// Serviços
const loginUserDbService = new LoginDbUserServices(encrypt, loginAdapter);
const registerUserDbService = new RegisterDbUserServices(encrypt, registerAdapter);

// Controladores
const loginControllers = new LoginControllers(loginUserDbService, generateHash);
const registerControllers = new RegisterControllers(registerUserDbService);
const welcomeControllers = new WelcomeControllers();

// Exportações
export {
	verifyLogin,
	verifyRegister,
	authenticateUser,
	loginControllers,
	registerControllers,
	welcomeControllers,
	pageInterfaceControllers,
	responseError,
};
