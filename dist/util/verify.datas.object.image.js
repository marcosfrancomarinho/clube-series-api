"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyDatasObjectImages = void 0;
const joi_1 = __importDefault(require("joi"));
class VerifyDatasObjectImages {
    hasError(params, schema) {
        const { error } = schema.validate(params);
        if (error)
            throw new Error(error.message);
    }
    verify = (imageObject) => {
        const schema = joi_1.default.object({
            title: joi_1.default.string().trim().empty().required().min(3).label("Titulo da Imagem"),
            url: joi_1.default.string().trim().empty().required().min(5).label("URL da Imagem"),
        });
        this.hasError(imageObject, schema);
    };
}
exports.VerifyDatasObjectImages = VerifyDatasObjectImages;
