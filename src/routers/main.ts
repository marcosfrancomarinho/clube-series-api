import { Router } from 'express';
import routerLogin from './login-router';
import routerRegister from './register-router';
import routerRoot from './root-router';
import routerWelcome from './welcome-router';

const router = Router();

router.use('/login', routerLogin);
router.use('/signup', routerRegister);
router.use('/welcome', routerWelcome);
router.use('/', routerRoot);

export default router;
