import User from '../model/User';
import { TypesResponseDbLogin } from '../types/response.db.types';
import Encrypt from '../util/encrypt';

class LoginDbUser {
	constructor(private encrypt: Encrypt, private user: typeof User) {}
	public login = async (
		email: string,
		password: string,
	): Promise<TypesResponseDbLogin> => {
		const messageError: string = 'Email ou senha inválida';
		try {
			const response = await this.user.findOne({
				attributes: ['id', 'name', 'password'],
				where: {
					email: email,
				},
				raw: true,
			});
			if (!response) throw new Error(messageError);
			const checkPassword: boolean = await this.encrypt.passwordValidation(
				password,
				response.password,
			);
			if (!checkPassword) throw new Error(messageError);
			const messageSuccess: TypesResponseDbLogin = {
				ok: true,
				status: 'usuario logado com sucesso',
				name: response.name,
				id: response.id,
			};
			return messageSuccess;
		} catch (error) {
			throw error;
		}
	};
}

export default LoginDbUser;
