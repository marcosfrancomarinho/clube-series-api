"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterAdapter = void 0;
const database_1 = require("../config/database");
class RegisterAdapter {
    queryCreateUser = async (name, email, password) => {
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
        await database_1.pool.query(sql, [name, email, password]);
    };
}
exports.RegisterAdapter = RegisterAdapter;
