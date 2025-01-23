// Modelos
import { StructureFooter } from "../model/structure.footer.model";
import { StructureImages } from "../model/structure.images.model";
import { StructureMenu } from "../model/structure.menu.model";

// Utilitários
import { GenerateHash } from "../util/generate.hash";
import { Encrypt } from "../util/encrypt";
import { VerifyDatasUser } from "../util/verify.datas.user";
import { VerifyDatasObjectImages } from "../util/verify.datas.object.image";

// Middlewares
import { VerifyRegisterMiddlewares } from "../middlewares/verify.register.middlewares";
import { AuthenticateUserMiddlewares } from "../middlewares/authenticate.user.middlewares";
import { ResponseErrorMiddlewares } from "../middlewares/response.error.middlewares";
import { VerifyLoginMiddlewares } from "../middlewares/verify.login.middlewares";

// Adaptadores
import { LoginAdapter } from "../integrations/login.adapter";
import { StructureSelectAdapter } from "../integrations/structure.select.adapter";
import { RegisterAdapter } from "../integrations/register.adapter";
import { StructureSelectFormaterAdapter } from "../integrations/structure.select.formater.adapter";
import { StructureCreateImageAdapter } from "../integrations/structure.create.image.adapter";

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

// Adaptadores de estruturas
const structureSelectAdapterFooter = new StructureSelectAdapter(StructureFooter);
const structureSelectAdapterImages = new StructureSelectAdapter(StructureImages);
const structureSelectAdapterMenu = new StructureSelectAdapter(StructureMenu);
const structureSelectFormaterAdapter = new StructureSelectFormaterAdapter(structureSelectAdapterMenu);

// Serviço de seleção no banco de dados
const structureDbSelectServices = new StructureDbSelectServices(
	structureSelectAdapterFooter,
	structureSelectAdapterImages,
	structureSelectFormaterAdapter
);

const verifyDatasObjectImages = new VerifyDatasObjectImages();
const sructureAdapterCreateImage = new StructureCreateImageAdapter(verifyDatasObjectImages);

// Controlador de interface de páginas
const pageInterfaceControllers = new PageInterfaceControllers(
	structureDbSelectServices,
	option_query_select_attributes_db
);

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
const loginAdapter = new LoginAdapter();
const registerAdapter = new RegisterAdapter();

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
	sructureAdapterCreateImage,
	responseError,
};
