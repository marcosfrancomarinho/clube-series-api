import { IRegisterAdapter } from "../@types/integrations/register.adapter";
import { pool } from "../config/database";

export class RegisterAdapter implements IRegisterAdapter {
	public queryCreateUser = async (name: string, email: string, password: string): Promise<void> => {
		try {
			const sql: string =
			`INSERT INTO register_user
			(
				id,
				name,
				email, 
				password
			)
			VALUES (
				DEFAULT, 
				$1, 
				$2, 
				$3,
			)`;
			await pool.query(sql, [name, email, password]);
		} catch (error) {
			throw error as Error;
		}
	};
}
