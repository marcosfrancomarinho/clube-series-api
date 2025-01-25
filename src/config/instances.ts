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
import { StructureSelectFormaterAdapter } from "../integrations/structure.select.formater.adapter";
import { LoginAdapter } from "../integrations/login.adapter";
import { RegisterAdapter } from "../integrations/register.adapter";
// Serviços
import { LoginDbUserServices } from "../service/login.db.user.services";
import { RegisterDbUserServices } from "../service/register.db.user.services";
import { StructureDbSelectServices } from "../service/structure.db.select.services";

// Controladores
import { LoginControllers } from "../controllers/login.controllers";
import { RegisterControllers } from "../controllers/register.controllers";
import { WelcomeControllers } from "../controllers/welcome.controllers";
import { PageInterfaceControllers } from "../controllers/pageInterface.controllers";

// Configuração adicional
import { option_query_select_attributes_db } from "./option.query.select.attributes.db";
import { IStructureMenu } from "../@types/model/structure.menu.model";
import { IStructureImages } from "../@types/model/structure.images.model";
import { IStructureFooter } from "../@types/model/structure.footer.model";

// Adaptadores de estruturas
const structureSelectAdapterFooter = new StructureSelectAdapter<IStructureFooter>("structure_footer");
const structureSelectAdapterImages = new StructureSelectAdapter<IStructureImages>("structure_images");
const structureSelectAdapterMenu = new StructureSelectAdapter<IStructureMenu>("structure_menu");
const structureSelectFormaterAdapter = new StructureSelectFormaterAdapter<IStructureMenu>(structureSelectAdapterMenu);

// Serviço de seleção no banco de dados
const structureDbSelectServices = new StructureDbSelectServices(
	structureSelectAdapterFooter,
	structureSelectAdapterImages,
	structureSelectFormaterAdapter
);

// Controlador de interface de páginas
const pageInterfaceControllers = new PageInterfaceControllers(structureDbSelectServices, option_query_select_attributes_db);

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
