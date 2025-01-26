import { IEncrypt } from "../@types/utils/encrypt";
import { IDatasRegister, IRegisterDbUserServices } from "../@types/services/register.db.user.services";
import { IRegisterAdapter } from "../@types/integrations/register.adapter";
import { IResponseDb } from "../@types/controllers/register.controllers";

export class RegisterDbUserServices implements IRegisterDbUserServices {
	constructor(private encrypt: IEncrypt, private registerAdapter: IRegisterAdapter) {}
	private messageSuccess: Pick<IResponseDb, "ok" | "status"> = {
		ok: true,
		status: "usuario cadastrado com sucesso",
	};
	public register = async ({ name, email, password }: IDatasRegister): Promise<Pick<IResponseDb, "ok" | "status">> => {
		try {
			const encryptedPassword: string = await this.encrypt.encryptPassword(password);
			await this.registerAdapter.queryCreateUser(name, email, encryptedPassword);
			return this.messageSuccess;
		} catch (error) {
			throw error;
		}
	};
}
