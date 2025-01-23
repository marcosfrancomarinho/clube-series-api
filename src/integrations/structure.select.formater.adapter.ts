import { IStructurSelecteAdapter } from "../@types/integrations/structure.select.adapter";

export class StructureSelectFormaterAdapter<T> implements IStructurSelecteAdapter<T> {
	constructor(private structureSelectAdapter: IStructurSelecteAdapter<T[]>) {}
	public search = async (attribtues: string[]): Promise<T> => {
		const menu: T[] = await this.structureSelectAdapter.search(attribtues);
		return menu.at(0) as T;
	};
}
