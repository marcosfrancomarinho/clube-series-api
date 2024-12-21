import { compare, hash, genSalt } from 'bcrypt';
import IEncrypt from '../interfaces/encrypt';

class Encrypt implements IEncrypt {
	constructor(
		private crypt: {
			compare: typeof compare;
			hash: typeof hash;
			genSalt: typeof genSalt;
		},
	) {}
	public encryptPassword = async (password: string): Promise<string> => {
		const salt = await this.crypt.genSalt(15);
		return await this.crypt.hash(password, salt);
	};
	public passwordValidation = async (
		password: string,
		encrypted_password: string,
	): Promise<boolean> => {
		const response = await this.crypt.compare(password, encrypted_password);
		return response;
	};
}
export default Encrypt;
