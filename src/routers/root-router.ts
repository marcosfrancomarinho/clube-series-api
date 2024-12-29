import { Router } from 'express';
import {
	authenticateUser,
	rootControllers,
	pageInterfaceControllers,
} from '../config/instances';

const routerRoot = Router();

routerRoot.post(
	'/',
	authenticateUser.authenticationTokenUser,
	rootControllers.accessAllowed,
);

routerRoot.get('/', pageInterfaceControllers.getDatasPageInterfaceDB);

export default routerRoot;
