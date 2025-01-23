import { Response, Request, NextFunction } from "express";
import { RequestModel } from "../util/request.model";
import { IGenerateHash } from "../@types/utils/generate.hash";
import { ILoginControllers } from "../@types/controllers/login.controllers";
import { ILoginDbUserServices } from "../@types/services/login.db.user.services";

export class LoginControllers extends RequestModel implements ILoginControllers {
	constructor(private loginUserDb: ILoginDbUserServices, private generateHash: IGenerateHash) {
		super();
	}
	public loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const datas = super.getDatasBodyLogin(req);
			const { id, email, ...response } = await this.loginUserDb.login(datas);
			const hash: string = this.generateHash.hash(email, id);
			res.status(200).setHeader("authorization", hash).json(response);
		} catch (error) {
			next(error);
		}
	};
}
