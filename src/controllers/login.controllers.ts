import { Response, Request } from 'express';
import TypesControllersLogin from '../types/login.controllers.types';
import loginUserDb from '../service/login.db.user';

class ControllersLogin implements TypesControllersLogin {
	async loginUser(req: Request, res: Response): Promise<void> {
		try {
			const { email, password } = req.body as {
				email: string;
				password: string;
			};
			const response = await loginUserDb(email, password);
			res.status(200).json(response);
		} catch (error) {
			const messageError: string = (error as Error).message;
			res.status(400).json({error:messageError});
		}
	}
}
export default ControllersLogin;
