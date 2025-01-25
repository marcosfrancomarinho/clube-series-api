"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyDatasObjectImages = void 0;
var joi_1 = __importDefault(require("joi"));
var VerifyDatasObjectImages = (function () {
    function VerifyDatasObjectImages() {
        var _this = this;
        this.verify = function (imageObject) {
            var schema = joi_1.default.object({
                title: joi_1.default.string().trim().empty().required().min(3).label("Titulo da Imagem"),
                url: joi_1.default.string().trim().empty().required().min(5).label("URL da Imagem"),
            });
            _this.hasError(imageObject, schema);
        };
    }
    VerifyDatasObjectImages.prototype.hasError = function (params, schema) {
        var error = schema.validate(params).error;
        if (error)
            throw new Error(error.message);
    };
    return VerifyDatasObjectImages;
}());
exports.VerifyDatasObjectImages = VerifyDatasObjectImages;
