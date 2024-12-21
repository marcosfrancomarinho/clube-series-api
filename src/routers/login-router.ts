import { Router } from 'express';
import ControllersLogin from '../controllers/login-controllers';
import LoginDbUser from '../service/login-db-user';
import Encrypt from '../util/encrypt';
import GenerateHash from '../util/generate-hash';
import jwt from 'jsonwebtoken';
import User from '../model/User';
import bcrypt from 'bcrypt';

const generateHash: GenerateHash = new GenerateHash(jwt);
const encrypt: Encrypt = new Encrypt(bcrypt);
const loginUserDb: LoginDbUser = new LoginDbUser(encrypt, User);
const controllersLogin: ControllersLogin = new ControllersLogin(
	loginUserDb,
	generateHash,
);
const routerLogin = Router();

routerLogin.post('/', controllersLogin.loginUser);

export default routerLogin;
