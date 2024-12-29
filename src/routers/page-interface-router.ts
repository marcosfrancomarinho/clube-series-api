import { Router } from 'express';
import { pageInterfaceControllers } from '../config/instances';

const routerPageInterface = Router();

routerPageInterface.get('/', pageInterfaceControllers.getDatasPageInterface);

export default routerPageInterface;
