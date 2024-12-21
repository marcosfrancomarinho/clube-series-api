import { Model, Optional, DataTypes } from 'sequelize';
import sequelize from '../config/database';
import UserAttributes from '../interfaces/user.model.types';

type UserCreationAttributes = Optional<
	UserAttributes,
	'id' | 'createdAt' | 'updatedAt'
>;

class User
	extends Model<UserAttributes, UserCreationAttributes>
	implements UserAttributes
{
	id?: number | undefined;
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
