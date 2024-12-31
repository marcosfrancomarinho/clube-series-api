import { Model, ModelStatic } from 'sequelize';
import { IStructureAdapterSelect } from './@types/structure-select-adapter';

class StructureSelectAdapter<T extends Model>
	implements IStructureAdapterSelect<T[]>
{
	private structureSelect: ModelStatic<T>;
	constructor(structureSelect: ModelStatic<T>) {
		this.structureSelect = structureSelect;
	}
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

export default StructureSelectAdapter;
