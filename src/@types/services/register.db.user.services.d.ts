import { IResponseDb } from "../controllers/register.controllers";

export type IDatasRegister = { name: string; email: string; password: string };

export interface IRegisterDbUserServices {
	register({ name, email, password }: IDatasRegister): Promise<Pick<IResponseDb, "ok" | "status">>;
}
