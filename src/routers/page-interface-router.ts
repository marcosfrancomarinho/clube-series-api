import { Router } from 'express';
import { pageInterfaceControllers } from '../config/instances';

const routerPageInterface = Router();

routerPageInterface.get('/', pageInterfaceControllers.getDatasPageInterfaceDB);

export default routerPageInterface;
