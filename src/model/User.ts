import { Model, Optional, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import IUser from '../interfaces/User';

type UserCreationAttributes = Optional<IUser, 'id' | 'createdAt' | 'updatedAt'>;

class User extends Model<IUser, UserCreationAttributes> implements IUser {
	id?: number;
	name!: string;
	email!: string;
	password!: string;
	readonly createdAt!: Date;
	readonly updatedAt!: Date;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: { name: 'email', msg: 'email ja cadastrado' },
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},
	},
	{
		sequelize: sequelize,
		tableName: 'register_user',
		timestamps: true,
	},
);

export default User;
