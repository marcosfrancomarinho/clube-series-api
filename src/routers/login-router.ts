import { Router } from 'express';
import {controllersLogin} from '../config/instances';

const routerLogin = Router();

routerLogin.post('/', controllersLogin.loginUser);

export default routerLogin;
