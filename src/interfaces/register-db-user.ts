import { IResponseDbRegister } from '../interfaces/response-db';

export interface IDatasRegister {
	name: string;
	email: string;
	password: string;
}

export interface IRegisterDbUser {
	register({
		name,
		email,
		password,
	}: IDatasRegister): Promise<IResponseDbRegister>;
}
