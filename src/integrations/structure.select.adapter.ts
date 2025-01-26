import { IStructurSelecteAdapter } from "../@types/integrations/structure.select.adapter";
import { IAttribute } from "../@types/services/structure.db.select.services";
import { pool } from "../config/database";
import { prepare } from "../util/remove.comments";

export class StructureSelectAdapter<T> implements IStructurSelecteAdapter<T> {
	constructor(private attributes: IAttribute) {}
	public search = async (): Promise<T> => {
		try {
			const params: string = this.attributes.list.map((param) => `"${param}"`).join(",");
			const sql: string = prepare(`--sql SELECT ${params} FROM "${this.attributes.table}"`);
			const { rows } = await pool.query(sql);
			return rows as T;
		} catch (error) {
			throw error as Error;
		}
	};
	public getAttribute = (): Pick<IAttribute, "name"> => {
		return { name: this.attributes.name };
	};
}
