import bcrypt from "bcrypt";
import { IEncrypt } from "../@types/utils/encrypt";

export class Encrypt implements IEncrypt {
	public encryptPassword = async (password: string): Promise<string> => {
		const salt = await bcrypt.genSalt(15);
		return await bcrypt.hash(password, salt);
	};
	public passwordValidation = async (password: string, encrypted_password: string): Promise<boolean> => {
		const response = await bcrypt.compare(password, encrypted_password);
		return response;
	};
}
