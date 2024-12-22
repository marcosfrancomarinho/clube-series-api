import { NextFunction, Response, Request } from 'express';
import IVerifyLogin from '../interfaces/verify-login';
import IVerifyDatasUser from '../interfaces/verify-datas-user';
import RequestModel from '../util/request-model';

class VerifyLogin extends RequestModel implements IVerifyLogin {
	private verifyDatasUser: IVerifyDatasUser;
	constructor(verifyDatasUser: IVerifyDatasUser) {
		super();
		this.verifyDatasUser = verifyDatasUser;
	}
	verifyDatasBodyUserLogin = (
		req: Request,
		res: Response,
		next: NextFunction,
	): void => {
		try {
			const { email, password } = super.getDatasBodyLogin(req);
			this.verifyDatasUser.loginUser(email, password);
			next();
		} catch (error) {
			res.status(400).json(super.messageError(error));
		}
	};
}
export default VerifyLogin;
