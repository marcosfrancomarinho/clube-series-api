import { Router } from 'express';
import { registerControllers } from '../config/instances';

const routerRegister = Router();

routerRegister.post('/', registerControllers.siginUpUser);

export default routerRegister;
