import { IResponseDb } from "../@types/register.controllers";
import { IDbResponse, ILoginAdapter } from "../@types/login.adapter";
import { IEncrypt } from "../@types/encrypt";
import { ILoginDbUserServices, IDatasLogin } from "../@types/login.db.user.services";

export class LoginDbUserServices implements ILoginDbUserServices {
	private messageError: string = "Email ou senha inválida";
	private attribute: string[] = ["id", "email", "password"];
	constructor(private encrypt: IEncrypt, private loginAdapter: ILoginAdapter) {}
	private messageSuccess = ({ email, id }: IDbResponse): IResponseDb => {
		return {
			ok: true,
			status: "usuario logado com sucesso",
			email,
			id,
		};
	};
	public login = async ({ email, password }: IDatasLogin): Promise<IResponseDb> => {
		try {
			const response = await this.loginAdapter.querySelectUser(email, this.attribute);
			if (!response) throw new Error(this.messageError);
			const checkPassword: boolean = await this.encrypt.passwordValidation(password, response.password);
			if (!checkPassword) throw new Error(this.messageError);
			return this.messageSuccess(response);
		} catch (error) {
			throw error;
		}
	};
}
