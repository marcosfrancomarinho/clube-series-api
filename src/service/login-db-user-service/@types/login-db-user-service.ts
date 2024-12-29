import { IResponseDbLogin } from "../../../controllers/login-controllers/@types/response-db-login";

export interface IDatasLogin {
	email: string;
	password: string;
}

export interface ILoginDbUserService {
	login({ email, password }: IDatasLogin): Promise<IResponseDbLogin>;
}


