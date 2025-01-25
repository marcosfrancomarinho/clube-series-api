"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureSelectFormaterAdapter = void 0;
class StructureSelectFormaterAdapter {
    structureSelectAdapter;
    constructor(structureSelectAdapter) {
        this.structureSelectAdapter = structureSelectAdapter;
    }
    search = async (attribtues) => {
        const menu = (await this.structureSelectAdapter.search(attribtues));
        return menu.at(0);
    };
}
exports.StructureSelectFormaterAdapter = StructureSelectFormaterAdapter;
