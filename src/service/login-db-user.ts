import User from '../model/User';
import { IResponseDbLogin } from '../interfaces/response-db';
import IEncrypt from '../interfaces/encrypt';
import { IDatasLogin, ILoginDbUser } from '../interfaces/login-db-user';

class LoginDbUser implements ILoginDbUser {
	private encrypt: IEncrypt;
	private user: typeof User;
	private messageError: string = 'Email ou senha inválida';
	private attribute: string[] = ['id', 'email', 'password'];
	constructor(encrypt: IEncrypt, user: typeof User) {
		this.encrypt = encrypt;
		this.user = user;
	}
	private messageSuccess = ({ email, id }: User) => {
		return {
			ok: true,
			status: 'usuario logado com sucesso',
			email,
			id,
		};
	};
	public login = async ({
		email,
		password,
	}: IDatasLogin): Promise<IResponseDbLogin> => {
		try {
			const response = await this.user.findOne({
				attributes: this.attribute,
				where: {
					email: email,
				},
				raw: true,
			});
			if (!response) throw new Error(this.messageError);
			const checkPassword: boolean = await this.encrypt.passwordValidation(
				password,
				response.password,
			);
			if (!checkPassword) throw new Error(this.messageError);
			return this.messageSuccess(response);
		} catch (error) {
			throw error;
		}
	};
}
export default LoginDbUser;
