"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StructureDbSelectFormatService {
    structureDbSelectService;
    constructor(structureDbSelectService) {
        this.structureDbSelectService = structureDbSelectService;
    }
    searchAllContent = async (attr) => {
        const datas = await this.structureDbSelectService.searchAllContent(attr);
        const _menu = datas.menu[0];
        return {
            footer: datas.footer,
            images: datas.images,
            menu: _menu,
        };
    };
}
exports.default = StructureDbSelectFormatService;
