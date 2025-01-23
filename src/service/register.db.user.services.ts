import { IEncrypt } from "../@types/encrypt";
import { IDatasRegister, IRegisterDbUserServices } from "../@types/register.db.user.services";
import { IRegisterAdapter } from "../@types/register.adapter";
import { IResponseDb } from "../@types/register.controllers";

export class RegisterDbUserServices implements IRegisterDbUserServices {
	private messageSuccess: Pick<IResponseDb, "ok" | "status"> = {
		ok: true,
		status: "usuario cadastrado com sucesso",
	};
	constructor(private encrypt: IEncrypt, private registerAdapter: IRegisterAdapter) {}
	public register = async ({
		name,
		email,
		password,
	}: IDatasRegister): Promise<Pick<IResponseDb, "ok" | "status">> => {
		try {
			const encryptedPassword: string = await this.encrypt.encryptPassword(password);
			await this.registerAdapter.queryCreateUser(name, email, encryptedPassword);
			return this.messageSuccess;
		} catch (error) {
			throw error;
		}
	};
}
