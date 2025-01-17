import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../../config/database';
import { IStructureImages } from './@types/structure-images';

type CreateParamsStructureImages = Optional<
	IStructureImages,
	'id' | 'createdAt' | 'updatedAt'
>;

class StructureImages extends Model<
	CreateParamsStructureImages,
	IStructureImages
> {
	id?: number;
	url!: string;
	title!: string;
	readonly createdAt?: Date;
	readonly updatedAt?: Date;
}

StructureImages.init(
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		url: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: true,
		tableName: 'structure_images',
	},
);

export default StructureImages;
