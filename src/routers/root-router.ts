import { Router } from 'express';
import { authenticateUser, rootControllers } from '../config/instances';

const routerRoot = Router();

routerRoot.post(
	'/',
	authenticateUser.authenticationTokenUser,
	rootControllers.accessAllowed,
);

export default routerRoot;
