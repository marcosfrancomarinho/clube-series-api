import { Response, Request } from 'express';
import TypesControllerSiginUp from '../types/siginup.controllers.types';
import registerUserDb from '../service/register.db.user';
import { TypesResponseDbRegister } from '../types/response.db.types';

class ControllerSiginUp implements TypesControllerSiginUp {
	async siginUpUser(req: Request, res: Response): Promise<void> {
		try {
			const { name, email, password } = req.body as {
				email: string;
				password: string;
				name: string;
			};
			const response: TypesResponseDbRegister = await registerUserDb(
				name,
				email,
				password,
			);
			res.status(200).json(response);
		} catch (error) {
			const messageError: string = (error as Error).message;
			res.status(400).json({ error: messageError });
		}
	}
}
export default ControllerSiginUp;
