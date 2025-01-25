"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseErrorMiddlewares = void 0;
var request_model_1 = require("../util/request.model");
var ResponseErrorMiddlewares = (function (_super) {
    __extends(ResponseErrorMiddlewares, _super);
    function ResponseErrorMiddlewares() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.error = function (error, req, res, next) {
            res.status(400).send(_super.prototype.messageError.call(_this, error));
        };
        return _this;
    }
    return ResponseErrorMiddlewares;
}(request_model_1.RequestModel));
exports.ResponseErrorMiddlewares = ResponseErrorMiddlewares;
