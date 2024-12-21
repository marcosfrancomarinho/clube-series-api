import User from '../model/User';
import { TypesResponseDbRegister } from '../types/response.db.types';
import Encrypt from '../util/encrypt';

class RegisterDbUser {
	constructor(private encrypt: Encrypt, private user: typeof User) {}
	public register = async (
		name: string,
		email: string,
		password: string,
	): Promise<TypesResponseDbRegister> => {
		const messageSuccess: TypesResponseDbRegister = {
			ok: true,
			status: 'usuario cadastrado com sucesso',
		};
		try {
			const encryptedPassword: string = await this.encrypt.encryptPassword(
				password,
			);
			await this.user.create({
				name: name,
				email: email,
				password: encryptedPassword,
			});
			return messageSuccess;
		} catch (error) {
			throw error;
		}
	};
}

export default RegisterDbUser;
