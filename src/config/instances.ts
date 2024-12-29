/**
 * Importação das bibliotecas e módulos necessários.
 */

import jwt from 'jsonwebtoken';
// Biblioteca para criação e verificação de tokens JWT (JSON Web Tokens), utilizados para autenticação segura.

import Joi from 'joi';
// Biblioteca para validação de dados, permitindo definir esquemas para garantir que os dados de entrada estejam corretos.

import bcrypt from 'bcrypt';
// Biblioteca para encriptação de senhas utilizando o algoritmo bcrypt, garantindo a segurança das senhas armazenadas.

import Page from '../model/Page/Page';
// Modelo de dados que representa a tabela "Page", que armazena informações sobre as páginas da aplicação.

import User from '../model/User/User';
// Modelo de dados que representa a tabela "User", contendo informações sobre os usuários (como nome, email, senha).

import GenerateHash from '../util/generate-hash/generate-hash';
// Classe utilitária para gerar hashes (como tokens JWT ou outros tipos de hash) necessários para autenticação segura.

import Encrypt from '../util/encrypt/encrypt';
// Classe utilitária para encriptar senhas e comparar com o hash armazenado no banco de dados para validação da senha do usuário.

import VerifyDatasUser from '../util/verify-datas/verify-datas-user';
// Classe utilitária para validar os dados de entrada do usuário utilizando a biblioteca Joi.

import VerifyLogin from '../middlewares/verify-login/verify-login';
// Middleware responsável por validar os dados de login (como email e senha) para garantir que o usuário possa se autenticar corretamente.

import VerifyRegister from '../middlewares/verify-register/verify-register';
// Middleware responsável por validar os dados de registro de um novo usuário, garantindo que as informações fornecidas estejam corretas.

import AuthenticateUser from '../middlewares/authenticate-user/authenticate-user';
// Middleware para autenticar usuários através da verificação do token JWT, assegurando que apenas usuários autenticados tenham acesso a recursos protegidos.

import LoginAdapter from '../integrations/login-adapter/login-adapter';
// Repositório responsável por acessar os dados de login no banco de dados, incluindo validação de credenciais de login.

import RegisterAdapter from '../integrations/register-adapter/register-adapter';
// Repositório responsável por registrar novos usuários no banco de dados, armazenando informações como nome, email e senha.

import LoginDbUserService from '../service/login-db-user-service/login-db-user-service';
// Serviço que contém a lógica de negócios para autenticar o usuário utilizando dados do banco de dados e a encriptação de senha.

import RegisterDbUserService from '../service/register-db-user-service/register-db-user-service';
// Serviço que contém a lógica de negócios para o processo de registro de um novo usuário, incluindo validação e armazenamento no banco de dados.

import LoginControllers from '../controllers/login-controllers/login-controllers';
// Controlador responsável por lidar com as requisições de login do usuário, processando as credenciais e gerando o token JWT.

import RegisterControllers from '../controllers/register-controllers/register-controllers';
// Controlador responsável por gerenciar as requisições de registro de novos usuários, validando os dados e criando o usuário no banco de dados.

import WelcomeControllers from '../controllers/welcome-controllers/welcome-controllers';
// Controlador responsável por exibir uma tela de boas-vindas após o login ou registro bem-sucedido.

import PageInterfaceAdapter from '../integrations/page-interface-adapter/page-interface-adapter';
// Repositório para acessar e manipular os dados das páginas da aplicação no banco de dados.

import PageInterfaceControllers from '../controllers/page-interface-controllers/page-interface-controllers';
// Controlador que gerencia as interações e exibição das páginas na aplicação, permitindo a manipulação dos dados de páginas.

import VerifyDatasObjectImages from '../util/verify-datas/verify-datas-object-image';
// Classe utilitária para validar os dados relacionados a objetos de imagens.

import ImageAdapterQueryCreate from '../integrations/image-adapter/image-adapter-query-create/image-adapter-query-create';
// Adaptador responsável por criar e manipular os dados de imagens no banco de dados, validando os dados do objeto de imagem antes de realizar operações.

/**
 * Instanciação das classes utilitárias e serviços necessários para o funcionamento do login, registro e autenticação.
 */

const generateHash = new GenerateHash(jwt);
// Instancia a classe GenerateHash que usa a biblioteca JWT para criar e verificar tokens de autenticação.

const encrypt = new Encrypt(bcrypt);
// Instancia a classe Encrypt que utiliza bcrypt para encriptar senhas e comparar com o hash armazenado no banco de dados.

const verifyDataUser = new VerifyDatasUser(Joi);
// Instancia a classe VerifyDatasUser que usa Joi para validar os dados de entrada, como email e senha, garantindo que estejam no formato correto.

const verifyLogin = new VerifyLogin(verifyDataUser);
// Instancia o middleware VerifyLogin, que valida os dados de login antes de permitir que o usuário se autentique.

const verifyRegister = new VerifyRegister(verifyDataUser);
// Instancia o middleware VerifyRegister, que valida os dados de registro (nome, email, senha) para garantir que o novo usuário forneça informações corretas.

const authenticateUser = new AuthenticateUser(generateHash);
// Instancia o middleware AuthenticateUser, que autentica o usuário com base no token JWT, garantindo que o usuário tenha acesso a recursos protegidos.

const loginAdapter = new LoginAdapter(User);
// Instancia o repositório LoginAdapter que lida com o acesso aos dados de login dos usuários no banco de dados.

const registerAdapter = new RegisterAdapter(User);
// Instancia o repositório RegisterAdapter que lida com o registro de novos usuários no banco de dados.

const loginUserDbService = new LoginDbUserService(encrypt, loginAdapter);
// Instancia o serviço LoginDbUserService, que processa a autenticação de usuários utilizando dados do banco e encriptação de senha.

const registerUserDbService = new RegisterDbUserService(
	encrypt,
	registerAdapter,
);
// Instancia o serviço RegisterDbUserService, que lida com a lógica de registro de novos usuários no banco de dados.

const loginControllers = new LoginControllers(loginUserDbService, generateHash);
// Instancia o controlador LoginControllers, que gerencia as requisições de login e processa as credenciais fornecidas pelo usuário.

const registerControllers = new RegisterControllers(registerUserDbService);
// Instancia o controlador RegisterControllers, que gerencia as requisições de registro de novos usuários, validando e criando os dados no banco.

const welcomeControllers = new WelcomeControllers();
// Instancia o controlador WelcomeControllers, que exibe uma tela de boas-vindas ao usuário após o login ou registro bem-sucedido.

const pageInterfaceAdapter = new PageInterfaceAdapter(Page);
// Instancia o repositório PageInterfaceRepository que lida com as páginas da aplicação no banco de dados.

const pageInterfaceControllers = new PageInterfaceControllers(
	pageInterfaceAdapter,
);
// Instancia o controlador PageInterfaceControllers, que gerencia a exibição e manipulação das páginas da aplicação.

const verifyDatasObjectImages = new VerifyDatasObjectImages(Joi);
// Instancia a classe VerifyDatasObjectImages que utiliza Joi para validar os dados de objetos de imagem.

const imageAdapterQueryCreate = new ImageAdapterQueryCreate(
	Page,
	verifyDatasObjectImages,
);
// Instancia o adaptador ImageAdapterQueryCreate que valida e manipula os dados de imagens no banco de dados.

/**
 * Exportação das instâncias para utilização em outros módulos ou rotas da aplicação.
 */

export {
	/**
	 * Middleware responsável por validar os dados de login de um usuário, como email e senha.
	 */
	verifyLogin,

	/**
	 * Middleware responsável por validar os dados de registro de um novo usuário.
	 */
	verifyRegister,

	/**
	 * Middleware responsável por autenticar o usuário com base no token JWT.
	 */
	authenticateUser,

	/**
	 * Controlador responsável por gerenciar o login do usuário, verificando as credenciais e gerando o token de autenticação.
	 */
	loginControllers,

	/**
	 * Controlador responsável por gerenciar o processo de registro de novos usuários.
	 */
	registerControllers,

	/**
	 * Controlador responsável por exibir uma tela de boas-vindas após o login ou o registro de um usuário.
	 */
	welcomeControllers,

	/**
	 * Controlador responsável por gerenciar as páginas da aplicação, permitindo a interação e a exibição de conteúdo dinâmico.
	 */
	pageInterfaceControllers,

	/**
	 * Validador utilitário para verificar os dados relacionados aos objetos de imagens.
	 */
	verifyDatasObjectImages,

	/**
	 * Adaptador responsável por criar e manipular os dados de imagens no banco de dados.
	 */
	imageAdapterQueryCreate,
};
