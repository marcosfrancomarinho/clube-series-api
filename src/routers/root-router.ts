import { Router } from 'express';
import { rootControllers } from '../config/instances';

const routerRoot = Router();

routerRoot.post('/', rootControllers.accessAllowed);

export default routerRoot;
