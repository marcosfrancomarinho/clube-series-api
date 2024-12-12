import { Router } from 'express';
import testeUserAuthenticate from '../controllers/teste.controllers';

const testeRouter = Router();

testeRouter.post('/', testeUserAuthenticate);

export default testeRouter;
