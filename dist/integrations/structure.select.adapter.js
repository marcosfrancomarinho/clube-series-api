"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureSelectAdapter = void 0;
const database_1 = require("../config/database");
class StructureSelectAdapter {
    table;
    constructor(table) {
        this.table = table;
    }
    search = async (attributes) => {
        try {
            const params = attributes.map((param) => `"${param}"`).join(",");
            const { rows } = await database_1.pool.query(`--sql SELECT ${params} FROM "${this.table}"`);
            return rows;
        }
        catch (error) {
            throw error;
        }
    };
}
exports.StructureSelectAdapter = StructureSelectAdapter;
