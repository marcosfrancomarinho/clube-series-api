import { IResponseDb } from "../@types/controllers/register.controllers";
import { IDbResponse, ILoginAdapter, IMessage } from "../@types/integrations/login.adapter";
import { IDatasLogin, ILoginDbUserServices } from "../@types/services/login.db.user.services";
import { IEncrypt } from "../@types/utils/encrypt";

export class LoginDbUserServices implements ILoginDbUserServices {
	constructor(private encrypt: IEncrypt, private loginAdapter: ILoginAdapter) {}
	private message: IMessage = {
		success: ({ email, id }: IDbResponse) => {
			return {
				ok: true,
				status: "usuario logado com sucesso",
				email,
				id,
			};
		},
		error: "email ou senha inválida",
	};
	public login = async ({ email, password }: IDatasLogin): Promise<IResponseDb> => {
		try {
			const response = await this.loginAdapter.querySelectUser(email);
			if (!response) throw new Error(this.message.error);
			const checkPassword: boolean = await this.encrypt.passwordValidation(password, response.password);
			if (!checkPassword) throw new Error(this.message.error);
			return this.message.success(response);
		} catch (error) {
			throw error;
		}
	};
}
