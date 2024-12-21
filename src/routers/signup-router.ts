import { Router } from 'express';
import { controllersSignUp } from '../config/instances';


const routerSignUp = Router();

routerSignUp.post('/', controllersSignUp.siginUpUser);

export default routerSignUp;
