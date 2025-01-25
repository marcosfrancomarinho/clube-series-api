import { IRegisterAdapter } from "../@types/integrations/register.adapter";
import { pool } from "../config/database";

export class RegisterAdapter implements IRegisterAdapter {
	public queryCreateUser = async (name: string, email: string, password: string): Promise<void> => {
		try {
			const client = await pool.connect();
			const sql: string = `
			INSERT INTO register_user
			(
				id,
				name,
				email, 
				password, 
				"createdAt", 
				"updatedAt"
			)
			VALUES (
				DEFAULT, 
				$1, 
				$2, 
				$3, 
				NOW(), 
				NOW()
			)`;
			await client.query(sql, [name, email, password]);
		} catch (error) {
			throw error as Error;
		} 
	};
}
