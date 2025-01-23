import { NextFunction, Request, Response } from "express";
import { RequestModel } from "../util/request.model";
import { IVerifyLoginMiddlewares } from "../@types/verify.login.middlewares";
import { IVerifyDatasUser } from "../@types/verify.datas.user";

export class VerifyLoginMiddlewares extends RequestModel implements IVerifyLoginMiddlewares {
	constructor(private verifyDatasUser: IVerifyDatasUser) {
		super();
	}
	verifyDatasBodyUserLogin = (req: Request, res: Response, next: NextFunction): void => {
		try {
			const { email, password } = super.getDatasBodyLogin(req);
			this.verifyDatasUser.loginUser(email, password);
			next();
		} catch (error) {
			res.status(400).json(super.messageError(error));
		}
	};
}
