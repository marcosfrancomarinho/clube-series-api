import { Response, Request } from 'express';
import LoginDbUser from '../service/login-db-user';
import GenerateHash from '../util/generate-hash';
import IControllersLogin from '../types/ilogin-controllers';

class ControllersLogin implements IControllersLogin {
	constructor(
		private loginUserDb: LoginDbUser,
		private generateHash: GenerateHash,
	) {}
	public loginUser = async (req: Request, res: Response): Promise<void> => {
		try {
			const { email, password } = req.body as {
				email: string;
				password: string;
			};
			const { ok, status, id, name } = await this.loginUserDb.login(
				email,
				password,
			);
			if (!id) throw new Error('ID não informado para geração do Token');
			const hash: string = this.generateHash.hash(email, id);
			res.status(200).setHeader('authorization', hash).json({ ok, status, name });
		} catch (error) {
			const messageError: string = (error as Error).message;
			res.status(400).json({ error: messageError });
		}
	};
}
export default ControllersLogin;
