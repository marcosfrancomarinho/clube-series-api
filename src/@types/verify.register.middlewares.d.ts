import { NextFunction, Response, Request } from 'express';

export interface IVerifyRegisterMiddlewares {
	verifyDatasBodyUserRegister(req: Request, res: Response, next: NextFunction): void;
}

