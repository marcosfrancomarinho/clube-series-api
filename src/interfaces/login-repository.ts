export interface IDbResponse {
	id: number;
	email: string;
	password: string;
}

export interface ILoginRepository {
	querySelectUser(
		email: string,
		retrievedData: string[],
	): Promise<IDbResponse | null>;
}
