import { Router } from 'express';
import { registerControllers, verifyRegister } from '../config/instances';

const routerRegister = Router();

routerRegister.post(
	'/',
	verifyRegister.verifyDatasBodyUserRegister,
	registerControllers.registerUser,
);

export default routerRegister;
