import { IStructureAdapterSelect } from './@types/structure-select-adapter';

class StructureSelectFormaterAdapter<T> implements IStructureAdapterSelect<T> {
	constructor(private structureSelectAdapter: IStructureAdapterSelect<T[]>) {}
	public search = async (attribtues: string[]): Promise<T> => {
		const menu: T[] = await this.structureSelectAdapter.search(attribtues);
		return menu.at(0) as T;
	};
}

export default StructureSelectFormaterAdapter;
