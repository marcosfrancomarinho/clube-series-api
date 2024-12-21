import { NextFunction, Response, Request } from 'express';

interface IVerifyLogin {
	verifyDatasBodyUserLogin(
		req: Request,
		res: Response,
		next: NextFunction,
	): void;
}

export default IVerifyLogin;
