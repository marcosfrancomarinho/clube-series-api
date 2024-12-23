import { Model, Optional, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import IUser from '../interfaces/User';

type UserCreationAttributes = Optional<IUser, 'id' | 'createdAt' | 'updatedAt'>;

class User extends Model<IUser, UserCreationAttributes> {
	public id!: number;
	public name!: string;
	public email!: string;
	public password!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
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
			unique: true,
			allowNull: false,
			validate: {
				isEmail: {
					msg: 'Email inválido',
				},
			},
		},
	},
	{
		sequelize,
		tableName: 'register_user',
		timestamps: true,
	},
);

export default User;
