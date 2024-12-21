import { NextFunction, Response, Request } from 'express';
import VerifyDatasUser from '../util/verify-datas';

class VerifyRegister {
	constructor(private VerifyDatasUser: VerifyDatasUser) {}
	verifyDatasBodyUserRegister = (
		req: Request,
		res: Response,
		next: NextFunction,
	): void => {
		try {
			const { name, email, password } = req.body as {
				name: string;
				email: string;
				password: string;
			};
			this.VerifyDatasUser.registerUser(name, email, password);
			next();
		} catch (error) {
			const messageError: string = (error as Error).message;
			res.status(400).json({ error: messageError });
		}
	};
}

export default VerifyRegister;
