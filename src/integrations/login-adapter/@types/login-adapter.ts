export interface IDbResponse {
	id: number;
	email: string;
	password: string;
}

export interface ILoginAdapter {
	querySelectUser(
		email: string,
		retrievedData: string[],
	): Promise<IDbResponse | null>;
}
