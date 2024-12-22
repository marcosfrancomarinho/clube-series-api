import { IResponseDbLogin } from '../interfaces/response-db';
import IEncrypt from '../interfaces/encrypt';
import { IDatasLogin, ILoginDbUser } from '../interfaces/login-db-user';
import { IDbResponse, ILoginRepository } from '../interfaces/login-repository';

class LoginDbUser implements ILoginDbUser {
	private encrypt: IEncrypt;
	private loginRepository: ILoginRepository;
	private messageError: string;
	private attribute: string[];
	constructor(encrypt: IEncrypt, loginRepository: ILoginRepository) {
		this.encrypt = encrypt;
		this.loginRepository = loginRepository;
		this.messageError = 'Email ou senha inválida';
		this.attribute = ['id', 'email', 'password'];
	}
	private messageSuccess = ({ email, id }: IDbResponse): IResponseDbLogin => {
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
			const response = await this.loginRepository.querySelectUser(
				email,
				this.attribute,
			);
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
