"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const structure_images_1 = __importDefault(require("../../../../model/structure/structure-images/structure-images"));
class StructureAdapterCreateImage {
    verifyDatasObjectImages;
    constructor(verifyDatasObjectImages) {
        this.verifyDatasObjectImages = verifyDatasObjectImages;
    }
    createImage = async (imageObject) => {
        try {
            this.verifyDatasObjectImages.verify(imageObject);
            await structure_images_1.default.create(imageObject);
        }
        catch (error) {
            throw error;
        }
    };
}
exports.default = StructureAdapterCreateImage;
