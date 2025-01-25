"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModel = void 0;
var RequestModel = (function () {
    function RequestModel() {
    }
    RequestModel.prototype.getDatasBodyLogin = function (req) {
        return req.body;
    };
    RequestModel.prototype.getDatasBodyRegister = function (req) {
        return req.body;
    };
    RequestModel.prototype.messageError = function (error) {
        return {
            error: error.message,
        };
    };
    return RequestModel;
}());
exports.RequestModel = RequestModel;
