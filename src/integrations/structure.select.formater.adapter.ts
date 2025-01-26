// import { IStructurSelecteAdapter } from "../@types/integrations/structure.select.adapter";

// export class StructureSelectFormaterAdapter<T> implements IStructurSelecteAdapter<T> {
// 	constructor(private structureSelectAdapter: IStructurSelecteAdapter<T>) {}
// 	public search = async (): Promise<T> => {
// 		const menu = (await this.structureSelectAdapter.search()) as T[];
// 		return menu.at(0) as T;
// 	};
// }
