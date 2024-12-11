import { Router } from 'express';
import ControllerSiginUp from '../controllers/siginup.controllers';
import TypesControllerSiginUp from '../types/siginup.controllers.types';

const controllersSignUp: TypesControllerSiginUp = new ControllerSiginUp();
const routerSignUp = Router();

routerSignUp.post('/', controllersSignUp.siginUpUser);

export default routerSignUp;
