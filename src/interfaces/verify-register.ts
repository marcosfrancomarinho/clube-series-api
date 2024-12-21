import { NextFunction, Response, Request } from 'express';

interface IVerifyRegister {
	verifyDatasBodyUserRegister(
		req: Request,
		res: Response,
		next: NextFunction,
	): void;
}

export default IVerifyRegister;
