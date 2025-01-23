import { Response, Request, NextFunction } from "express";
import { RequestModel } from "../util/request.model";
import { IRegisterDbUserServices } from "../@types/services/register.db.user.services";
import { IResponseDb, IRegisterControllers } from "../@types/controllers/register.controllers";

export class RegisterControllers extends RequestModel implements IRegisterControllers {
	constructor(private registerUserDb: IRegisterDbUserServices) {
		super();
	}
	public registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const datas = super.getDatasBodyRegister(req);
			const response: Pick<IResponseDb, "ok" | "status"> = await this.registerUserDb.register(datas);
			res.status(201).json(response);
		} catch (error) {
			next(error);
		}
	};
}
