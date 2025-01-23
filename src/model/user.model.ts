import { Model, Optional, DataTypes } from "sequelize";
import IUser from "../@types/user.model";
import { sequelize } from "../config/database";

type UserCreationAttributes = Optional<IUser, "id" | "createdAt" | "updatedAt">;

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
			allowNull: false,
			unique: {
				name: "unique_email_index",
				msg: "Este email já está registrado.",
			},
			validate: {
				isEmail: {
					msg: "Informe um email válido.",
				},
			},
		},
	},
	{
		sequelize,
		tableName: "register_user",
		timestamps: true,
	}
);

export { User };
