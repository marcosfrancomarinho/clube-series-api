import { Router } from 'express';
import {
	authenticateUser,
	pageInterfaceControllers,
} from '../config/instances';

const routerRoot = Router();

routerRoot.post('/', authenticateUser.authenticationTokenUser);

routerRoot.get('/', pageInterfaceControllers.getDatasPageInterfaceDB);

export default routerRoot;
