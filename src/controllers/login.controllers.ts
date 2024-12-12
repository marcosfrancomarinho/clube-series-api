import { Response, Request } from 'express';
import TypesControllersLogin from '../types/login.controllers.types';
import loginUserDb from '../service/login.db.user';
import jwt from 'jsonwebtoken';

class ControllersLogin implements TypesControllersLogin {
	async loginUser(req: Request, res: Response): Promise<void> {
		try {
			const { email, password } = req.body as {
				email: string;
				password: string;
			};
			const { email: e_mail, ok, status, id } = await loginUserDb(email, password);
			const keyScret: string = process.env.SECRET as string;
			const hash: string = jwt.sign({ email: e_mail, id }, keyScret);

			res.status(200).setHeader('authorization', hash).json({ ok, status });
		} catch (error) {
			const messageError: string = (error as Error).message;
			res.status(400).json({ error: messageError });
		}
	}
}
export default ControllersLogin;
