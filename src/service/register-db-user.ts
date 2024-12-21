import User from '../model/User';
import { IResponseDbRegister } from '../interfaces/response-db';
import {
	IRegisterDbUser,
	IDatasRegister,
} from '../interfaces/register-db-user';
import IEncrypt from '../interfaces/encrypt';

class RegisterDbUser implements IRegisterDbUser {
	private encrypt: IEncrypt;
	private user: typeof User;
	private messageSuccess: IResponseDbRegister = {
		ok: true,
		status: 'usuario cadastrado com sucesso',
	};
	constructor(encrypt: IEncrypt, user: typeof User) {
		(this.encrypt = encrypt), (this.user = user);
	}
	public register = async ({
		name,
		email,
		password,
	}: IDatasRegister): Promise<IResponseDbRegister> => {
		try {
			const encryptedPassword: string = await this.encrypt.encryptPassword(
				password,
			);
			await this.user.create({
				name: name,
				email: email,
				password: encryptedPassword,
			});
			return this.messageSuccess;
		} catch (error) {
			throw error;
		}
	};
}
export default RegisterDbUser;
