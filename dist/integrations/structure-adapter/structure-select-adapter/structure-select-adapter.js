"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StructureSelectAdapter {
    structureSelect;
    constructor(structureSelect) {
        this.structureSelect = structureSelect;
    }
    search = async (attributes) => {
        try {
            const response = await this.structureSelect.findAll({
                raw: true,
                attributes: attributes,
            });
            return response;
        }
        catch (error) {
            throw error;
        }
    };
}
exports.default = StructureSelectAdapter;
