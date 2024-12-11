import bcrypt from 'bcrypt';

export async function encryptPassword(password: string): Promise<string> {
	const salt = await bcrypt.genSalt(15);
	return await bcrypt.hash(password, salt);
}

export async function passwordValidation(
	password: string,
	encrypted_password: string,
): Promise<boolean> {
	const response = await bcrypt.compare(password, encrypted_password);
	return response;
}
