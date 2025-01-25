"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureSelectAdapter = void 0;
const database_1 = require("../config/database");
const remove_comments_1 = require("../util/remove.comments");
class StructureSelectAdapter {
    table;
    constructor(table) {
        this.table = table;
    }
    search = async (attributes) => {
        try {
            const params = attributes.map((param) => `"${param}"`).join(",");
            const sql = (0, remove_comments_1.prepare)(`--sql SELECT ${params} FROM "${this.table}"`);
            const { rows } = await database_1.pool.query(sql);
            return rows;
        }
        catch (error) {
            throw error;
        }
    };
}
exports.StructureSelectAdapter = StructureSelectAdapter;
