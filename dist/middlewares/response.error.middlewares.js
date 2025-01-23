"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseErrorMiddlewares = void 0;
const request_model_1 = require("../util/request.model");
class ResponseErrorMiddlewares extends request_model_1.RequestModel {
    error = (error, req, res, next) => {
        res.status(400).send(super.messageError(error));
    };
}
exports.ResponseErrorMiddlewares = ResponseErrorMiddlewares;
