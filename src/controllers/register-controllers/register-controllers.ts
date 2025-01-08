import { Response, Request, NextFunction } from 'express';
import RequestModel from '../../util/request-model/request-model';
import IRegisterControllers from './@types/register-controllers';
import { IResponseDbRegister } from './@types/response-db-register';
import { IRegisterDbUserService } from '../../service/register-db-user-service/@types/register-db-user-service';

class RegisterControllers extends RequestModel implements IRegisterControllers {
	constructor(private registerUserDb: IRegisterDbUserService) {
		super();
	}
	public registerUser = async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const datas = super.getDatasBodyRegister(req);
			const response: IResponseDbRegister = await this.registerUserDb.register(
				datas,
			);
			res.status(201).json(response);
		} catch (error) {
			next(error);
		}
	};
}
export default RegisterControllers;
