// Modelos
import StructureFooter from '../model/structure/structure-footer/structure-footer';
import StructureImages from '../model/structure/structure-images/structure-images';
import StructureMenu from '../model/structure/structure-menu/structure-menu';

// Utilitários
import GenerateHash from '../util/generate-hash/generate-hash';
import Encrypt from '../util/encrypt/encrypt';
import VerifyDatasUser from '../util/verify-datas/verify-datas-user';
import VerifyDatasObjectImages from '../util/verify-datas/verify-datas-object-image';

// Middlewares
import VerifyLogin from '../middlewares/verify-login/verify-login';
import VerifyRegister from '../middlewares/verify-register/verify-register';
import AuthenticateUser from '../middlewares/authenticate-user/authenticate-user';

// Adaptadores
import LoginAdapter from '../integrations/login-adapter/login-adapter';
import RegisterAdapter from '../integrations/register-adapter/register-adapter';
import StructureSelectAdapter from '../integrations/structure-adapter/structure-select-adapter/structure-select-adapter';
import StructureAdapterCreateImage from '../integrations/structure-adapter/structure-adapter-create/structure-adapter-create-image/structure-adapter-create-image';

// Serviços
import LoginDbUserService from '../service/login-db-user-service/login-db-user-service';
import RegisterDbUserService from '../service/register-db-user-service/register-db-user-service';
import StructureDbSelectService from '../service/structure-db-select-service/structure-db-select-service';

// Controladores
import LoginControllers from '../controllers/login-controllers/login-controllers';
import RegisterControllers from '../controllers/register-controllers/register-controllers';
import WelcomeControllers from '../controllers/welcome-controllers/welcome-controllers';
import PageInterfaceControllers from '../controllers/page-interface-controllers/page-interface-controllers';

// Configuração adicional
import { option_query_select_attributes_db } from './option-query-select-attributes-db';
import StructureSelectFormaterAdapter from '../integrations/structure-adapter/structure-select-adapter/structure-select-formater-adapter';
import ResponseError from '../middlewares/error/response-error';
// Adaptadores de estruturas
const structureSelectAdapterFooter = new StructureSelectAdapter(
	StructureFooter,
);
const structureSelectAdapterImages = new StructureSelectAdapter(
	StructureImages,
);
const structureSelectAdapterMenu = new StructureSelectAdapter(StructureMenu);

const structureSelectFormaterMenuDecorator = new StructureSelectFormaterAdapter(
	structureSelectAdapterMenu,
);
// Serviço de seleção no banco de dados
const structureDbSelectService = new StructureDbSelectService(
	structureSelectAdapterFooter,
	structureSelectAdapterImages,
	structureSelectFormaterMenuDecorator,
);

const verifyDatasObjectImages = new VerifyDatasObjectImages();

const sructureAdapterCreateImage = new StructureAdapterCreateImage(
	verifyDatasObjectImages,
);

// Controlador de interface de páginas
const pageInterfaceControllers = new PageInterfaceControllers(
	structureDbSelectService,
	option_query_select_attributes_db,
);

// Instâncias de utilitários
const generateHash = new GenerateHash();
const encrypt = new Encrypt();
const verifyDataUser = new VerifyDatasUser();

// Middlewares
const verifyLogin = new VerifyLogin(verifyDataUser);
const verifyRegister = new VerifyRegister(verifyDataUser);
const authenticateUser = new AuthenticateUser(generateHash);
const responseError = new ResponseError();

// Adaptadores de banco de dados
const loginAdapter = new LoginAdapter();
const registerAdapter = new RegisterAdapter();

// Serviços
const loginUserDbService = new LoginDbUserService(encrypt, loginAdapter);
const registerUserDbService = new RegisterDbUserService(
	encrypt,
	registerAdapter,
);

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
