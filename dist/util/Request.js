"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = RequestModel;
