import { IResponseDbLogin } from '../../controllers/login-controllers/@types/response-db-login';
import {
	IDbResponse,
	ILoginAdapter,
} from '../../integrations/login-adapter/@types/login-adapter';

import IEncrypt from '../../util/encrypt/@types/encrypt';
import {
	ILoginDbUserService,
	IDatasLogin,
} from './@types/login-db-user-service';

class LoginDbUserService implements ILoginDbUserService {
	private encrypt: IEncrypt;
	private loginAdapter: ILoginAdapter;
	private messageError: string;
	private attribute: string[];
	constructor(encrypt: IEncrypt, loginAdapter: ILoginAdapter) {
		this.encrypt = encrypt;
		this.loginAdapter = loginAdapter;
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
			const response = await this.loginAdapter.querySelectUser(
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
export default LoginDbUserService;
