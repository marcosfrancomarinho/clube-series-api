export interface IResponseDbRegister {
	ok: boolean;
	status: string;
}
export interface IResponseDbLogin {
	ok: boolean;
	status: string;
	id: number;
	email: string;
}
