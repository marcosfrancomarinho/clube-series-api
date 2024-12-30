import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../../config/database';
import { IStructureMenu } from './@types/Structure-Menu';

type CreateParamsStructureMenu = Optional<IStructureMenu, 'id'>;

class StructureMenu extends Model<CreateParamsStructureMenu, IStructureMenu> {
	id?: number;
	private!: string;
	public!: string;
}

StructureMenu.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			defaultValue: 0,
			allowNull: false,
		},
		private: {
			type: DataTypes.ARRAY(DataTypes.CHAR(30)),
			allowNull: false,
		},
		public: {
			type: DataTypes.ARRAY(DataTypes.CHAR(30)),
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		tableName: 'structure_menu',
	},
);

export default StructureMenu;
