"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_model_1 = __importDefault(require("../../util/request-model/request-model"));
class ResponseError extends request_model_1.default {
    error = (error, req, res, next) => {
        res.status(400).send(super.messageError(error));
    };
}
exports.default = ResponseError;
