import jwt from 'jsonwebtoken';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import User from '../model/user/user';
import GenerateHash from '../util/generate-hash/generate-hash';
import Encrypt from '../util/encrypt/encrypt';
import VerifyDatasUser from '../util/verify-datas/verify-datas-user';
import StructureFooter from '../model/structure/structure-footer/structure-footer';
import StructureImages from '../model/structure/structure-images/structure-images';
import StructureMenu from '../model/structure/structure-menu/structure-menu';
import VerifyLogin from '../middlewares/verify-login/verify-login';
import VerifyRegister from '../middlewares/verify-register/verify-register';
import AuthenticateUser from '../middlewares/authenticate-user/authenticate-user';
import LoginAdapter from '../integrations/login-adapter/login-adapter';
import RegisterAdapter from '../integrations/register-adapter/register-adapter';
import StructureSelectAdapter from '../integrations/structure-adapter/structure-select-adapter/structure-select-adapter';
import LoginDbUserService from '../service/login-db-user-service/login-db-user-service';
import RegisterDbUserService from '../service/register-db-user-service/register-db-user-service';
import LoginControllers from '../controllers/login-controllers/login-controllers';
import RegisterControllers from '../controllers/register-controllers/register-controllers';
import WelcomeControllers from '../controllers/welcome-controllers/welcome-controllers';
import StructureDbSelectService from '../service/structure-db-select-service/structure-db-select-service';
import PageInterfaceControllers from '../controllers/page-interface-controllers/page-interface-controllers';
import { option_query_select_attributes_db } from './option-query-select-attributes-db';

// Adaptadores para acessar os dados das estruturas
const structureSelectAdapterFooter = new StructureSelectAdapter(
	StructureFooter,
);
const structureSelectAdapterImages = new StructureSelectAdapter(
	StructureImages,
);
const structureSelectAdapterMenu = new StructureSelectAdapter(StructureMenu);

// Serviço para gerenciar seleção no banco de dados
const structureDbSelectService = new StructureDbSelectService(
	structureSelectAdapterFooter,
	structureSelectAdapterImages,
	structureSelectAdapterMenu,
);

// Controlador para gerenciar a interface das páginas
const pageInterfaceControllers = new PageInterfaceControllers(
	structureDbSelectService,
	option_query_select_attributes_db,
);

// Utilitários para autenticação e encriptação
const generateHash = new GenerateHash(jwt); // Geração e verificação de tokens JWT
const encrypt = new Encrypt(bcrypt); // Encriptação e verificação de senhas
const verifyDataUser = new VerifyDatasUser(Joi); // Validação de dados do usuário

// Middlewares
const verifyLogin = new VerifyLogin(verifyDataUser); // Validação de dados de login
const verifyRegister = new VerifyRegister(verifyDataUser); // Validação de dados de registro
const authenticateUser = new AuthenticateUser(generateHash); // Autenticação via token JWT

// Adaptadores de banco de dados para login e registro
const loginAdapter = new LoginAdapter(User);
const registerAdapter = new RegisterAdapter(User);

// Serviços de login e registro
const loginUserDbService = new LoginDbUserService(encrypt, loginAdapter); // Serviço de login
const registerUserDbService = new RegisterDbUserService(
	encrypt,
	registerAdapter,
); // Serviço de registro

// Controladores
const loginControllers = new LoginControllers(loginUserDbService, generateHash); // Controlador de login
const registerControllers = new RegisterControllers(registerUserDbService); // Controlador de registro
const welcomeControllers = new WelcomeControllers(); // Controlador de boas-vindas

// Exportação das instâncias
export {
	verifyLogin,
	verifyRegister,
	authenticateUser,
	loginControllers,
	registerControllers,
	welcomeControllers,
	pageInterfaceControllers,
};
