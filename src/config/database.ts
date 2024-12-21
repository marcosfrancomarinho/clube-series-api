import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
	database: process.env.DB_DATABASE,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	dialect: 'postgres',
});

export async function verifyConnectionDataBase(): Promise<void> {
	try {
		await sequelize.authenticate();
		console.log('connection database');
	} catch (error) {
		console.log(error);
	}
}

export default sequelize;
