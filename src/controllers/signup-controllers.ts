import { Response, Request } from 'express';
import { TypesResponseDbRegister } from '../interfaces/response.db.types';
import RegisterDbUser from '../service/register-db-user';
import ISignupControllers from '../interfaces/isignup-controllers';

class SignUpControllers implements ISignupControllers {
	constructor(private registerUserDb: RegisterDbUser) {}
	public siginUpUser = async (req: Request, res: Response): Promise<void> => {
		try {
			const { name, email, password } = req.body as {
				email: string;
				password: string;
				name: string;
			};
			console.log(email);
			const response: TypesResponseDbRegister = await this.registerUserDb.register(
				name,
				email,
				password,
			);
			res.status(200).json(response);
		} catch (error) {
			const messageError: string = (error as Error).message;
			res.status(400).json({ error: messageError });
		}
	};
}
export default SignUpControllers;
