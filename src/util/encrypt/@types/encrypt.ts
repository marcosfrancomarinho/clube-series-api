interface IEncrypt {
	encryptPassword(password: string): Promise<string>;
	passwordValidation(
		password: string,
		encrypted_password: string,
	): Promise<boolean>;
}
export default IEncrypt;
