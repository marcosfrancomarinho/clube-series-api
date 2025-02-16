import joi, { StringSchema } from "joi";
import { IVerifyDatasUser } from "../@types/utils/verify.datas.user";

export class VerifyDatasUser implements IVerifyDatasUser {
	private hasError(params: string, schema: StringSchema<string>): void {
		const { error } = schema.validate(params);
		if (error) throw new Error(error.message);
	}
	public nameUser(name: string): void {
		const schema = joi.string().required().trim().min(3).max(100).empty().label("nome do usuário");
		this.hasError(name, schema);
	}
	public emailUser(email: string): void {
		const schema = joi.string().required().trim().min(10).max(100).email().empty().label("email do usuário");
		this.hasError(email, schema);
	}
	public passwordUser(password: string): void {
		const schema = joi.string().required().trim().min(8).max(15).empty().label("senha do usuário");
		this.hasError(password, schema);
	}
	public registerUser(name: string, email: string, password: string): void {
		try {
			this.nameUser(name);
			this.emailUser(email);
			this.passwordUser(password);
		} catch (error) {
			throw error;
		}
	}
	public loginUser(email: string, password: string): void {
		try {
			this.emailUser(email);
			this.passwordUser(password);
		} catch (error) {
			throw error;
		}
	}
}
