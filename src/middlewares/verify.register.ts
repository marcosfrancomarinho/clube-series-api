import { NextFunction, Response, Request } from 'express';
import VerifyDatasUser from '../util/verify.datas';
import TypeVerifyDatasUser from '../types/verify.datas.types';

const verify: TypeVerifyDatasUser = new VerifyDatasUser();

function verifyDatasBodyUserRegister(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	try {
		const { name, email, password } = req.body as {
			name: string;
			email: string;
			password: string;
		};
		verify.registerUser(name, email, password);
		next();
	} catch (error) {
		const messageError: string = (error as Error).message;
		res.status(400).json({ error: messageError });
	}
}
export default verifyDatasBodyUserRegister;
