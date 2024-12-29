import { NextFunction, Response, Request } from 'express';
import RequestModel from '../../util/request-model/request-model';
import IVerifyDatasUser from '../../util/verify-datas/@types/verify-datas-user';
import IVerifyRegister from './@types/verify-register';

class VerifyRegister extends RequestModel implements IVerifyRegister {
	private verifyDatasUser: IVerifyDatasUser;
	constructor(verifyDatasUser: IVerifyDatasUser) {
		super();
		this.verifyDatasUser = verifyDatasUser;
	}
	verifyDatasBodyUserRegister = (
		req: Request,
		res: Response,
		next: NextFunction,
	): void => {
		try {
			const { name, email, password } = super.getDatasBodyRegister(req);
			this.verifyDatasUser.registerUser(name, email, password);
			next();
		} catch (error) {
			res.status(400).json(super.messageError(error));
		}
	};
}

export default VerifyRegister;
