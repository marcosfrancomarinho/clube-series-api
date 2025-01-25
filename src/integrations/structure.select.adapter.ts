import { IStructurSelecteAdapter } from "../@types/integrations/structure.select.adapter";
import { pool } from "../config/database";
import { prepare } from "../util/remove.comments";

export class StructureSelectAdapter<T> implements IStructurSelecteAdapter<T> {
	constructor(private table: string) {}
	public search = async (attributes: string[]): Promise<T[] | T> => {
		try {
			const params: string = attributes.map((param) => `"${param}"`).join(",");
			const sql: string = prepare(`--sql SELECT ${params} FROM "${this.table}"`);
			const { rows } = await pool.query(sql);
			return rows as T[];
		} catch (error) {
			throw error as Error;
		}
	};
}
