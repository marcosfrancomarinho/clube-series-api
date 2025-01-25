import pg from "pg";

const pool = new pg.Pool({
	database: process.env.DB_DATABASE,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	max: 10
});

export { pool };
