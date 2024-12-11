import { Router } from 'express';
import routerLogin from './login.router';
import routerSignUp from './siginup.router';
import verifyDatasBodyUserLogin from '../middlewares/verify.login';
import verifyDatasBodyUserRegister from '../middlewares/verify.register';

const router = Router();

router.use('/login', verifyDatasBodyUserLogin, routerLogin);
router.use('/signup', verifyDatasBodyUserRegister, routerSignUp);

export default router;
