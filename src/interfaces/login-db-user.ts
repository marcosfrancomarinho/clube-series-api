import { IResponseDbLogin } from './response-db';

export interface IDatasLogin {
	email: string;
	password: string;
}

export interface ILoginDbUser {
	login({ email, password }: IDatasLogin): Promise<IResponseDbLogin>;
}


