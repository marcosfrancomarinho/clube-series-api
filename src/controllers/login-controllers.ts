import { Response, Request } from 'express';
import ILoginControllers from '../interfaces/login-controllers';
import { ILoginDbUser } from '../interfaces/login-db-user';
import IGenerateHash from '../interfaces/geneate-hash';
import RequestModel from '../model/Request';

class LoginControllers extends RequestModel implements ILoginControllers {
	private loginUserDb: ILoginDbUser;
	private generateHash: IGenerateHash;
	constructor(loginUserDb: ILoginDbUser, generateHash: IGenerateHash) {
		super();
		this.loginUserDb = loginUserDb;
		this.generateHash = generateHash;
	}
	public loginUser = async (req: Request, res: Response): Promise<void> => {
		try {
			const datas = super.getDatasBodyLogin(req);
			const { id, email, ...response } = await this.loginUserDb.login(datas);
			const hash: string = this.generateHash.hash(email, id as number);
			res.status(200).setHeader('authorization', hash).json(response);
		} catch (error) {
			res.status(400).json(super.messageError(error));
		}
	};
}
export default LoginControllers;
