import { Router } from 'express';
import routerLogin from './login-router';
import routerSignUp from './signup-router';
import VerifyLogin from '../middlewares/verify-login';
import VerifyRegister from '../middlewares/verify-register';
import AuthenticateUser from '../middlewares/authenticate-user';
import routerRoot from './root-router';
import VerifyDatasUser from '../util/verify-datas';
import GenerateHash from '../util/generate-hash';
import jwt from 'jsonwebtoken';

const generateHash: GenerateHash = new GenerateHash(jwt);
const verifyDataUser: VerifyDatasUser = new VerifyDatasUser();
const verifyLogin: VerifyLogin = new VerifyLogin(verifyDataUser);
const verifyRegister: VerifyRegister = new VerifyRegister(verifyDataUser);
const authenticateUser: AuthenticateUser = new AuthenticateUser(generateHash);

const router = Router();

router.use('/login', verifyLogin.verifyDatasBodyUserLogin, routerLogin);
router.use('/signup', verifyRegister.verifyDatasBodyUserRegister, routerSignUp);
router.use('/', authenticateUser.authenticationTokenUser, routerRoot);

export default router;
