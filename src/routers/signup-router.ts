import { Router } from 'express';
import SignUpControllers from '../controllers/signup-controllers';
import RegisterDbUser from '../service/register-db-user';
import Encrypt from '../util/encrypt';
import User from '../model/User';
import bcrypt from 'bcrypt';

const encrypt: Encrypt = new Encrypt(bcrypt);
const registerUserDb: RegisterDbUser = new RegisterDbUser(encrypt, User);
const controllersSignUp: SignUpControllers = new SignUpControllers(
	registerUserDb,
);
const routerSignUp = Router();

routerSignUp.post('/', controllersSignUp.siginUpUser);

export default routerSignUp;
