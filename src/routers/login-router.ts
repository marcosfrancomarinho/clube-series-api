import  Router  from 'express';
import  {loginControllers, verifyLogin}  from '../config/instances';

const routerLogin = Router();

routerLogin.post(
	'/',
	verifyLogin.verifyDatasBodyUserLogin,
	loginControllers.loginUser,
);

export default routerLogin;
