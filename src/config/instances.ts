import AuthenticateUser from '../middlewares/authenticate-user';
import VerifyLogin from '../middlewares/verify-login';
import VerifyRegister from '../middlewares/verify-register';
import GenerateHash from '../util/generate-hash';
import VerifyDatasUser from '../util/verify-datas';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Encrypt from '../util/encrypt';
import LoginDbUser from '../service/login-db-user';
import ControllersLogin from '../controllers/login-controllers';
import User from '../model/User';
import RegisterDbUser from '../service/register-db-user';
import SignUpControllers from '../controllers/signup-controllers';
import RootControllres from '../controllers/root-controllers';

const controllersRoot = new RootControllres();
const generateHash: GenerateHash = new GenerateHash(jwt);
const verifyDataUser: VerifyDatasUser = new VerifyDatasUser();
const verifyLogin: VerifyLogin = new VerifyLogin(verifyDataUser);
const verifyRegister: VerifyRegister = new VerifyRegister(verifyDataUser);
const authenticateUser: AuthenticateUser = new AuthenticateUser(generateHash);
const encrypt: Encrypt = new Encrypt(bcrypt);
const loginUserDb: LoginDbUser = new LoginDbUser(encrypt, User);
const registerUserDb: RegisterDbUser = new RegisterDbUser(encrypt, User);
const controllersLogin: ControllersLogin = new ControllersLogin(
	loginUserDb,
	generateHash,
);
const controllersSignUp: SignUpControllers = new SignUpControllers(
	registerUserDb,
);

export  {
	verifyLogin,
	verifyRegister,
	authenticateUser,
	controllersLogin,
	controllersSignUp,
   controllersRoot
};
