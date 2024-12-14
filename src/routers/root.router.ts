import { Router } from 'express';
import authenticationTokenUser from '../middlewares/authenticate.user';
import ControllerRoot from '../controllers/root.controllers';
import TypesControllerRoot from '../types/root.controllers.types';

const routerRoot = Router();
const controllersRoot: TypesControllerRoot = new ControllerRoot();

routerRoot.post('/', authenticationTokenUser, controllersRoot.accessAllowed);

export default routerRoot;
