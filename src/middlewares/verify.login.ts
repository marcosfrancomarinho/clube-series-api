import { NextFunction, Response, Request } from 'express';
import VerifyDatasUser from '../util/verify.datas';
import TypeVerifyDatasUser from '../types/verify.datas.types';

const verify: TypeVerifyDatasUser = new VerifyDatasUser();

function verifyDatasBodyUserLogin(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	try {
		const { email, password } = req.body as {
			email: string;
			password: string;
		};
		verify.loginUser(email, password);
		next();
	} catch (error) {
		const messageError: string = (error as Error).message;
		res.status(400).json({error:messageError});
	}
}
export default verifyDatasBodyUserLogin;
