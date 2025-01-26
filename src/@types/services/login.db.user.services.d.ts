import { IResponseDb } from "./register.controllers";

export type IDatasLogin = { email: string; password: string };

export interface ILoginDbUserServices {
	login({ email, password }: IDatasLogin): Promise<IResponseDb>;
}
