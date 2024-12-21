import { Router } from 'express';
import { loginControllers } from '../config/instances';

const routerLogin = Router();

routerLogin.post('/', loginControllers.loginUser);

export default routerLogin;
