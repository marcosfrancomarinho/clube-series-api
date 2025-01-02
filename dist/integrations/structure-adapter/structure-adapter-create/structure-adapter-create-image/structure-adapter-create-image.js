"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StructureAdapterCreateImage {
    structureImage;
    verifyDatasObjectImages;
    constructor(structureImage, verifyDatasObjectImages) {
        this.structureImage = structureImage;
        this.verifyDatasObjectImages = verifyDatasObjectImages;
    }
    createImage = async (imageObject) => {
        try {
            this.verifyDatasObjectImages.verify(imageObject);
            await this.structureImage.create(imageObject);
        }
        catch (error) {
            throw error;
        }
    };
}
exports.default = StructureAdapterCreateImage;
