import { IResponseDbRegister } from "../../../controllers/register-controllers/@types/response-db-register";

export interface IDatasRegister {
	name: string;
	email: string;
	password: string;
}

export interface IRegisterDbUserService {
	register({
		name,
		email,
		password,
	}: IDatasRegister): Promise<IResponseDbRegister>;
}
