import { Router } from 'express';
import { controllersRoot } from '../config/instances';

const routerRoot = Router();

routerRoot.post('/', controllersRoot.accessAllowed);

export default routerRoot;
