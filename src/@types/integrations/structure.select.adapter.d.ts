import { IAttribute } from "../services/structure.db.select.services";

export interface IStructurSelecteAdapter<T = any> {
	search(): Promise<T>;
	getAttribute(): Pick<IAttribute, "name">;
}
