import IEncrypt from '../../util/encrypt/@types/encrypt';
import { IResponseDbRegister } from '../../controllers/register-controllers/@types/response-db-register';
import {
	IDatasRegister,
	IRegisterDbUserService,
} from './@types/register-db-user-service';
import { IRegisterAdapter } from '../../integrations/register-adapter/@types/register-adapter';

class RegisterDbUserService implements IRegisterDbUserService {
	private messageSuccess: IResponseDbRegister = {
		ok: true,
		status: 'usuario cadastrado com sucesso',
	};
	constructor(
		private encrypt: IEncrypt,
		private registerAdapter: IRegisterAdapter,
	) {}
	public register = async ({
		name,
		email,
		password,
	}: IDatasRegister): Promise<IResponseDbRegister> => {
		try {
			const encryptedPassword: string = await this.encrypt.encryptPassword(
				password,
			);
			await this.registerAdapter.queryCreateUser(name, email, encryptedPassword);
			return this.messageSuccess;
		} catch (error) {
			throw error;
		}
	};
}
export default RegisterDbUserService;
