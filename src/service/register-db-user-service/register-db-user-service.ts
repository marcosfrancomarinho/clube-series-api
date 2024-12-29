import IEncrypt from '../../util/encrypt/@types/encrypt';
import { IResponseDbRegister } from '../../controllers/register-controllers/@types/response-db-register';
import IRegisterRepository from '../../repositories/register-repository/@types/register-repository';
import {
	IDatasRegister,
	IRegisterDbUserService,
} from './@types/register-db-user-service';

class RegisterDbUserService implements IRegisterDbUserService {
	private encrypt: IEncrypt;
	private registerRepository: IRegisterRepository;
	private messageSuccess: IResponseDbRegister;
	constructor(encrypt: IEncrypt, registerRepository: IRegisterRepository) {
		this.encrypt = encrypt;
		this.registerRepository = registerRepository;
		this.messageSuccess = {
			ok: true,
			status: 'usuario cadastrado com sucesso',
		};
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
			await this.registerRepository.queryCreateUser(
				name,
				email,
				encryptedPassword,
			);
			return this.messageSuccess;
		} catch (error) {
			throw error;
		}
	};
}
export default RegisterDbUserService;
