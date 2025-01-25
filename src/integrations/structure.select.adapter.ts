import { IStructurSelecteAdapter } from "../@types/integrations/structure.select.adapter";
import { pool } from "../config/database";

export class StructureSelectAdapter<T> implements IStructurSelecteAdapter<T> {
	constructor(private table: string) {}
	public search = async (attributes: string[]): Promise<T[] | T> => {
		try {
			const params: string = attributes.map((param) => `"${param}"`).join(",");
			const { rows } = await pool.query(`SELECT ${params} FROM "${this.table}"`);
			return rows as T[];
		} catch (error) {
			throw error as Error;
		}
	};
}
