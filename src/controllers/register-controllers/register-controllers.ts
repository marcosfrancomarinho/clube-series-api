import { Response, Request } from 'express';
import RequestModel from '../../util/request-model/request-model';
import IRegisterControllers from './@types/register-controllers';
import { IResponseDbRegister } from './@types/response-db-register';
import { IRegisterDbUserService } from '../../service/register-db-user-service/@types/register-db-user-service';

class RegisterControllers extends RequestModel implements IRegisterControllers {
	private registerUserDb: IRegisterDbUserService;
	constructor(registerUserDb: IRegisterDbUserService) {
		super();
		this.registerUserDb = registerUserDb;
	}
	public registerUser = async (req: Request, res: Response): Promise<void> => {
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
