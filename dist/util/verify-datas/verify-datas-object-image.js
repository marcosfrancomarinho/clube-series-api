"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VerifyDatasObjectImages {
    joi;
    constructor(joi) {
        this.joi = joi;
    }
    hasError(params, schema) {
        const { error } = schema.validate(params);
        if (error)
            throw new Error(error.message);
    }
    verify = (imageObject) => {
        const schema = this.joi.object({
            title: this.joi
                .string()
                .trim()
                .empty()
                .required()
                .min(3)
                .label('Titulo da Imagem'),
            url: this.joi
                .string()
                .trim()
                .empty()
                .required()
                .min(5)
                .label('URL da Imagem'),
        });
        this.hasError(imageObject, schema);
    };
}
exports.default = VerifyDatasObjectImages;
