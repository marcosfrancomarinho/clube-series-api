import jwt from 'jsonwebtoken';
import Joi from 'joi';
import bcrypt from 'bcrypt';
import User from '../model/User';
import AuthenticateUser from '../middlewares/authenticate-user';
import VerifyLogin from '../middlewares/verify-login';
import VerifyRegister from '../middlewares/verify-register';
import GenerateHash from '../util/generate-hash';
import VerifyDatasUser from '../util/verify-datas';
import Encrypt from '../util/encrypt';
import RegisterDbUser from '../service/register-db-user';
import LoginDbUser from '../service/login-db-user';
import LoginControllers from '../controllers/login-controllers';
import RegisterControllers from '../controllers/register-controllers';
import RootControllers from '../controllers/root-controllers';
import WelcomeControllers from '../controllers/welcome-controller';

const generateHash = new GenerateHash(jwt);
const encrypt = new Encrypt(bcrypt);
const verifyDataUser = new VerifyDatasUser(Joi);
const verifyLogin = new VerifyLogin(verifyDataUser);
const verifyRegister = new VerifyRegister(verifyDataUser);
const authenticateUser = new AuthenticateUser(generateHash);
const loginUserDb = new LoginDbUser(encrypt, User);
const registerUserDb = new RegisterDbUser(encrypt, User);
const rootControllers = new RootControllers();
const loginControllers = new LoginControllers(loginUserDb, generateHash);
const registerControllers = new RegisterControllers(registerUserDb);
const welcomeControllers = new WelcomeControllers();

export {
	verifyLogin,
	verifyRegister,
	authenticateUser,
	loginControllers,
	registerControllers,
	rootControllers,
	welcomeControllers
};
