import { compare, hash, genSalt } from 'bcrypt';

class Encrypt {
	constructor(
		private crypt: {
			compare: typeof compare;
			hash: typeof hash;
			genSalt: typeof genSalt;
		},
	) {}
	async encryptPassword(password: string): Promise<string> {
		const salt = await this.crypt.genSalt(15);
		return await this.crypt.hash(password, salt);
	}
	async passwordValidation(
		password: string,
		encrypted_password: string,
	): Promise<boolean> {
		const response = await this.crypt.compare(password, encrypted_password);
		return response;
	}
}
export default Encrypt;
