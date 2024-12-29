import { Router } from 'express';
import routerLogin from './login-router';
import routerRegister from './register-router';
import routerRoot from './root-router';
import routerWelcome from './welcome-router';
const routerMain = Router();

routerMain.use('/signup', routerRegister);
routerMain.use('/login', routerLogin);
routerMain.use('/welcome', routerWelcome);
routerMain.use('/', routerRoot);

export default routerMain;
