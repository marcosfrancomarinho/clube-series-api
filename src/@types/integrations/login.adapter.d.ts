export type IDbResponse = { id: number; email: string; password: string };

export type IMessage = {
	success: ({ email, id }: IDbResponse) => {
		ok: boolean;
		status: string;
		email: string;
		id: number;
	};
	error: string;
};

export interface ILoginAdapter {
	querySelectUser(email: string): Promise<IDbResponse | null>;
}
