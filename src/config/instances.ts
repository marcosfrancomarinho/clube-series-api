/**
 * Importação das bibliotecas e módulos necessários.
 */
import { Sequelize } from 'sequelize';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import bcrypt from 'bcrypt';

// Importação de modelos e utilitários para autenticação, validação e manipulação de dados
import Page from '../model/Page/Page';
import User from '../model/User/User';
import GenerateHash from '../util/generate-hash/generate-hash';
import Encrypt from '../util/encrypt/encrypt';
import VerifyDatasUser from '../util/verify-datas/verify-datas-user';
import VerifyDatasObjectImages from '../util/verify-datas/verify-datas-object-image';

// Importação de middlewares e adaptadores
import VerifyLogin from '../middlewares/verify-login/verify-login';
import VerifyRegister from '../middlewares/verify-register/verify-register';
import AuthenticateUser from '../middlewares/authenticate-user/authenticate-user';
import LoginAdapter from '../integrations/login-adapter/login-adapter';
import RegisterAdapter from '../integrations/register-adapter/register-adapter';
import PageInterfaceAdapter from '../integrations/page-interface-adapter/page-interface-adapter';
import ImageAdapterQueryCreate from '../integrations/image-adapter/image-adapter-query-create/image-adapter-query-create';

// Importação de serviços e controladores
import LoginDbUserService from '../service/login-db-user-service/login-db-user-service';
import RegisterDbUserService from '../service/register-db-user-service/register-db-user-service';
import LoginControllers from '../controllers/login-controllers/login-controllers';
import RegisterControllers from '../controllers/register-controllers/register-controllers';
import WelcomeControllers from '../controllers/welcome-controllers/welcome-controllers';
import PageInterfaceControllers from '../controllers/page-interface-controllers/page-interface-controllers';

/**
 * Instanciação das classes utilitárias, serviços e middlewares necessários.
 */
const generateHash = new GenerateHash(jwt);
// Gera e verifica tokens JWT para autenticação do usuário.

const encrypt = new Encrypt(bcrypt);
// Encripta senhas usando bcrypt e compara com o hash armazenado no banco de dados.

const verifyDataUser = new VerifyDatasUser(Joi);
// Valida os dados de entrada do usuário (como email e senha) usando Joi.

const verifyLogin = new VerifyLogin(verifyDataUser);
// Middleware que valida os dados de login (email e senha).

const verifyRegister = new VerifyRegister(verifyDataUser);
// Middleware que valida os dados de registro (nome, email, senha).

const authenticateUser = new AuthenticateUser(generateHash);
// Middleware que autentica o usuário com base no token JWT.

const loginAdapter = new LoginAdapter(User);
// Acessa os dados de login no banco de dados para verificar as credenciais do usuário.

const registerAdapter = new RegisterAdapter(User);
// Registra novos usuários no banco de dados, armazenando informações como nome, email e senha.

const loginUserDbService = new LoginDbUserService(encrypt, loginAdapter);
// Serviço que realiza o login do usuário, utilizando encriptação de senha e o repositório de login.

const registerUserDbService = new RegisterDbUserService(
	encrypt,
	registerAdapter,
);
// Serviço que lida com o registro de novos usuários no banco de dados.

const loginControllers = new LoginControllers(loginUserDbService, generateHash);
// Controlador que gerencia as requisições de login e gera o token JWT após a autenticação.

const registerControllers = new RegisterControllers(registerUserDbService);
// Controlador que gerencia o processo de registro de novos usuários.

const welcomeControllers = new WelcomeControllers();
// Controlador que exibe uma tela de boas-vindas após login ou registro bem-sucedido.

const pageInterfaceAdapter = new PageInterfaceAdapter(Page);
// Adaptador que lida com as páginas da aplicação no banco de dados.

const pageInterfaceControllers = new PageInterfaceControllers(
	pageInterfaceAdapter,
);
// Controlador que gerencia a exibição e manipulação das páginas na aplicação.

const verifyDatasObjectImages = new VerifyDatasObjectImages(Joi);
// Valida os dados de objetos de imagem antes de realizar qualquer operação.

const imageAdapterQueryCreate = new ImageAdapterQueryCreate(
	Page,
	verifyDatasObjectImages,
	Sequelize, // O Sequelize é utilizado aqui para interagir com o banco de dados, especificamente para manipulação de registros de imagem.
);
// Adaptador que cria e manipula dados de imagens no banco de dados, utilizando o Sequelize para validar e processar as imagens.

/**
 * Exportação das instâncias para utilização em outros módulos ou rotas da aplicação.
 */
export {
	verifyLogin, // Middleware de validação de login
	verifyRegister, // Middleware de validação de registro
	authenticateUser, // Middleware de autenticação via token JWT
	loginControllers, // Controlador de login
	registerControllers, // Controlador de registro de novos usuários
	welcomeControllers, // Controlador de boas-vindas
	pageInterfaceControllers, // Controlador de manipulação de páginas
	verifyDatasObjectImages, // Validador de dados de objetos de imagens
	imageAdapterQueryCreate, // Adaptador de criação de imagens no banco de dados
};
