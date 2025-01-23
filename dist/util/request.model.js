"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModel = void 0;
class RequestModel {
    getDatasBodyLogin(req) {
        return req.body;
    }
    getDatasBodyRegister(req) {
        return req.body;
    }
    messageError(error) {
        return {
            error: error.message,
        };
    }
}
exports.RequestModel = RequestModel;
