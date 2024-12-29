import { NextFunction, Response, Request } from 'express';
import RequestModel from '../../util/request-model/request-model';
import IVerifyLogin from './@types/verify-login';
import IVerifyDatasUser from '../../util/verify-datas/@types/verify-datas-user';

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
