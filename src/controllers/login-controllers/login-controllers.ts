import { Response, Request } from 'express';
import RequestModel from '../../util/request-model/request-model';
import ILoginControllers from './@types/login-controllers';
import { ILoginDbUserService } from '../../service/login-db-user-service/@types/login-db-user-service';
import IGenerateHash from '../../util/generate-hash/@types/generate-hash';

class LoginControllers extends RequestModel implements ILoginControllers {
	private loginUserDb: ILoginDbUserService;
	private generateHash: IGenerateHash;
	constructor(loginUserDb: ILoginDbUserService, generateHash: IGenerateHash) {
		super();
		this.loginUserDb = loginUserDb;
		this.generateHash = generateHash;
	}
	public loginUser = async (req: Request, res: Response): Promise<void> => {
		try {
			const datas = super.getDatasBodyLogin(req);
			const { id, email, ...response } = await this.loginUserDb.login(datas);
			const hash: string = this.generateHash.hash(email, id);
			res.status(200).setHeader('authorization', hash).json(response);
		} catch (error) {
			res.status(400).json(super.messageError(error));
		}
	};
}
export default LoginControllers;
