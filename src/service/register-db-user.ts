import { IResponseDbRegister } from '../interfaces/response-db';
import {
	IRegisterDbUser,
	IDatasRegister,
} from '../interfaces/register-db-user';
import IEncrypt from '../interfaces/encrypt';
import IRegisterRepository from '../interfaces/register-repository';

class RegisterDbUser implements IRegisterDbUser {
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
export default RegisterDbUser;
