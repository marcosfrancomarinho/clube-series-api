import { Router } from 'express';
import ControllersLogin from '../controllers/login.controllers';
import TypesControllersLogin from '../types/login.controllers.types';

const controllersLogin: TypesControllersLogin = new ControllersLogin();
const routerLogin = Router();

routerLogin.post('/', controllersLogin.loginUser);

export default routerLogin;
