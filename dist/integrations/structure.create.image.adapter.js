"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureCreateImageAdapter = void 0;
class StructureCreateImageAdapter {
    verifyDatasObjectImages;
    constructor(verifyDatasObjectImages) {
        this.verifyDatasObjectImages = verifyDatasObjectImages;
    }
    createImage = async (imageObject) => {
        try {
            this.verifyDatasObjectImages.verify(imageObject);
        }
        catch (error) {
            throw error;
        }
    };
}
exports.StructureCreateImageAdapter = StructureCreateImageAdapter;
