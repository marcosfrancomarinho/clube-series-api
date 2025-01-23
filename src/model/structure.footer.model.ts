import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";
import { IStructureFooter } from "../@types/structure.footer.model";

type CreateParamsStructureFooter = Optional<IStructureFooter, "id" | "createdAt" | "updatedAt">;

class StructureFooter extends Model<CreateParamsStructureFooter, IStructureFooter> {
	id?: number;
	url!: string;
	redes!: string;
	readonly createdAt?: Date;
	readonly updatedAt?: Date;
}

StructureFooter.init(
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
		},
		redes: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: true,
		tableName: "structure_footer",
	}
);

export { StructureFooter };
