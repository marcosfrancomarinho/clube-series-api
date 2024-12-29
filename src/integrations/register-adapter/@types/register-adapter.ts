
export interface IRegisterAdapter {
	queryCreateUser(
		name: string,
		email: string,
		password: string,
	): Promise<void>;
}
