import { Router } from 'express';
import routerLogin from './login-router';
import routerSignUp from './signup-router';
import routerRoot from './root-router';
import {
	authenticateUser,
	verifyLogin,
	verifyRegister,
} from '../config/instances';

const router = Router();

router.use('/login', verifyLogin.verifyDatasBodyUserLogin, routerLogin);
router.use('/signup', verifyRegister.verifyDatasBodyUserRegister, routerSignUp);
router.use('/', authenticateUser.authenticationTokenUser, routerRoot);

export default router;
