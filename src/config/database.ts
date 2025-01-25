import pg from "pg";

const pool = new pg.Pool({
	connectionString: process.env.URL_DB,
	ssl: {
		rejectUnauthorized: false,
	},
});

export { pool };
