import { Response, Request } from 'express';
import IRegisterControllers from '../interfaces/register-controllers';
import { IResponseDbRegister } from '../interfaces/response-db';
import { IRegisterDbUser } from '../interfaces/register-db-user';
import RequestModel from '../model/Request';

class RegisterControllers extends RequestModel implements IRegisterControllers {
	private registerUserDb: IRegisterDbUser;
	constructor(registerUserDb: IRegisterDbUser) {
		super();
		this.registerUserDb = registerUserDb;
	}
	public siginUpUser = async (req: Request, res: Response): Promise<void> => {
		try {
			const datas = super.getDatasBodyRegister(req);
			const response: IResponseDbRegister = await this.registerUserDb.register(
				datas,
			);
			res.status(200).json(response);
		} catch (error) {
			res.status(400).json(super.messageError(error));
		}
	};
}
export default RegisterControllers;
