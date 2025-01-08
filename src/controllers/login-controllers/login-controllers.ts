import { Response, Request, NextFunction } from 'express';
import RequestModel from '../../util/request-model/request-model';
import ILoginControllers from './@types/login-controllers';
import { ILoginDbUserService } from '../../service/login-db-user-service/@types/login-db-user-service';
import IGenerateHash from '../../util/generate-hash/@types/generate-hash';

class LoginControllers extends RequestModel implements ILoginControllers {
	constructor(
		private loginUserDb: ILoginDbUserService,
		private generateHash: IGenerateHash,
	) {
		super();
	}
	public loginUser = async (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> => {
		try {
			const datas = super.getDatasBodyLogin(req);
			const { id, email, ...response } = await this.loginUserDb.login(datas);
			const hash: string = this.generateHash.hash(email, id);
			res.status(200).setHeader('authorization', hash).json(response);
		} catch (error) {
			next(error);
		}
	};
}
export default LoginControllers;
