import { Router } from 'express';
import RootControllres from '../controllers/root-controllers';

const rootControllers: RootControllres = new RootControllres();

const routerRoot = Router();
const controllersRoot = new RootControllres();

routerRoot.post(
	'/',
	rootControllers.accessAllowed,
	controllersRoot.accessAllowed,
);

export default routerRoot;
