"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdapter = void 0;
const database_1 = require("../config/database");
class RegisterAdapter {
    queryCreateUser = async (name, email, password) => {
        const client = await database_1.pool.connect();
        try {
            const sql = `
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
        }
        catch (error) {
            throw error;
        }
        finally {
            client.release();
        }
    };
}
exports.RegisterAdapter = RegisterAdapter;
