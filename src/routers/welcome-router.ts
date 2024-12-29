import Router from 'express';
import { welcomeControllers } from '../config/instances';

const routerWelcome = Router();

routerWelcome.get('/', welcomeControllers.welcomeUser);

export default routerWelcome;
