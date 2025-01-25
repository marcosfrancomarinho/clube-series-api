import { IRegisterAdapter } from "../@types/integrations/register.adapter";
import { pool } from "../config/database";

export class RegisterAdapter implements IRegisterAdapter {
	public queryCreateUser = async (name: string, email: string, password: string): Promise<void> => {
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
		await pool.query(sql, [name, email, password]);
	};
}
