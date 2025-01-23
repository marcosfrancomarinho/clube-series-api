import { NextFunction, Response, Request } from "express";

export interface IVerifyLoginMiddlewares {
	verifyDatasBodyUserLogin(req: Request, res: Response, next: NextFunction): void;
}
