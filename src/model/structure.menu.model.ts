import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { IStructureMenu } from "../@types/structure.menu.model";

type CreateParamsStructureMenu = Optional<IStructureMenu, "id">;

class StructureMenu extends Model<CreateParamsStructureMenu, IStructureMenu> {
	id?: number;
	private!: string[];
	public!: string[];
	title!: string;
}

StructureMenu.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		private: {
			type: DataTypes.ARRAY(DataTypes.STRING(30)),
			allowNull: false,
		},
		public: {
			type: DataTypes.ARRAY(DataTypes.STRING(30)),
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		tableName: "structure_menu",
	}
);

export { StructureMenu };
