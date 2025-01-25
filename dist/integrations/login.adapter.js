"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAdapter = void 0;
const database_1 = require("../config/database");
class LoginAdapter {
    querySelectUser = async (email) => {
        try {
            const sql = `
			SELECT
				id,
				email,
				password
			FROM
				register_user
			WHERE
				email = $1`;
            const { rows } = await database_1.pool.query(sql, [email]);
            return rows.at(0) ?? null;
        }
        catch (error) {
            throw error;
        }
        finally {
            (await database_1.pool.connect()).release();
        }
    };
}
exports.LoginAdapter = LoginAdapter;
