import { Model, ModelStatic } from "sequelize";
import { IStructurSelecteAdapter } from "../@types/structure.select.adapter";

export class StructureSelectAdapter<T extends Model> implements IStructurSelecteAdapter<T[]> {
	constructor(private structureSelect: ModelStatic<T>) {}
	public search = async (attributes: string[]): Promise<T[]> => {
		try {
			const response = await this.structureSelect.findAll({
				raw: true,
				attributes: attributes,
			});
			return response as T[];
		} catch (error) {
			throw error as Error;
		}
	};
}
