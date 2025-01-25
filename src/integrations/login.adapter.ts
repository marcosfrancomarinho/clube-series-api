import { IDbResponse, ILoginAdapter } from "../@types/integrations/login.adapter";
import { pool } from "../config/database";

export class LoginAdapter implements ILoginAdapter {
	public querySelectUser = async (email: string): Promise<IDbResponse | null> => {
		const client = await pool.connect();
		try {
			const sql: string = `
			SELECT
				id,
				email,
				password
			FROM
				register_user
			WHERE
				email = $1`;
			const { rows } = await client.query<IDbResponse>(sql, [email]);
			return rows.at(0) ?? null;
		} catch (error) {
			throw error as Error;
		} finally {
			client.release();
		}
	};
}
