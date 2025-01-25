import { NextFunction, Response, Request } from "express";
import { RequestModel } from "../util/request.model";
import { IVerifyDatasUser } from "../@types/utils/verify.datas.user";
import { IVerifyRegisterMiddlewares } from "../@types/middleware/verify.register.middlewares";

export class VerifyRegisterMiddlewares extends RequestModel implements IVerifyRegisterMiddlewares {
	constructor(private verifyDatasUser: IVerifyDatasUser) {
		super();
	}
	verifyDatasBodyUserRegister = (req: Request, res: Response, next: NextFunction): void => {
		try {
			const { name, email, password } = this.getDatasBodyRegister(req);
			this.verifyDatasUser.registerUser(name, email, password);
			next();
		} catch (error) {
			res.status(400).json(this.messageError(error));
		}
	};
}
