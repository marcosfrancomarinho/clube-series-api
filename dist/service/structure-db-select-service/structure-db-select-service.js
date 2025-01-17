"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StructureDbSelectService {
    structureAdapterSelectFooter;
    structureAdapterSelectImages;
    structureAdapterSelectMenu;
    constructor(structureAdapterSelectFooter, structureAdapterSelectImages, structureAdapterSelectMenu) {
        this.structureAdapterSelectFooter = structureAdapterSelectFooter;
        this.structureAdapterSelectImages = structureAdapterSelectImages;
        this.structureAdapterSelectMenu = structureAdapterSelectMenu;
    }
    searchAllContent = async ({ attrFooter, attrImages, attrMenu, }) => {
        try {
            const [footer, images, menu] = await Promise.all([
                this.structureAdapterSelectFooter.search(attrFooter),
                this.structureAdapterSelectImages.search(attrImages),
                this.structureAdapterSelectMenu.search(attrMenu),
            ]);
            return {
                footer,
                images,
                menu,
            };
        }
        catch (error) {
            throw error;
        }
    };
}
exports.default = StructureDbSelectService;
