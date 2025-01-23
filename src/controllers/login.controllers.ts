import { Response, Request, NextFunction } from "express";
import { RequestModel } from "../util/request.model";
import { ILoginDbUserServices } from "../@types/login.db.user.services";
import { IGenerateHash } from "../@types/generatehash";
import { ILoginControllers } from "../@types/login.controllers";

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
