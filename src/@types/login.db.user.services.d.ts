import { IResponseDb } from "./register.controllers";

export interface IDatasLogin {
	email: string;
	password: string;
}

export interface ILoginDbUserServices {
	login({ email, password }: IDatasLogin): Promise<IResponseDb>;
}
