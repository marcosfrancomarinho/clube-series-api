import { IStructurSelecteAdapter } from "../@types/integrations/structure.select.adapter";

export class StructureSelectFormaterAdapter<T> implements IStructurSelecteAdapter<T> {
	constructor(private structureSelectAdapter: IStructurSelecteAdapter<T>) {}
	public search = async (attribtues: string[]): Promise<T[] | T> => {
		try {
			const menu = (await this.structureSelectAdapter.search(attribtues)) as T[];
			return menu.at(0) as T;
		} catch (error) {
			throw error as Error;
		}
	};
}
