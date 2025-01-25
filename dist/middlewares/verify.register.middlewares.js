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
exports.VerifyRegisterMiddlewares = void 0;
var request_model_1 = require("../util/request.model");
var VerifyRegisterMiddlewares = (function (_super) {
    __extends(VerifyRegisterMiddlewares, _super);
    function VerifyRegisterMiddlewares(verifyDatasUser) {
        var _this = _super.call(this) || this;
        _this.verifyDatasUser = verifyDatasUser;
        _this.verifyDatasBodyUserRegister = function (req, res, next) {
            try {
                var _a = _super.prototype.getDatasBodyRegister.call(_this, req), name_1 = _a.name, email = _a.email, password = _a.password;
                _this.verifyDatasUser.registerUser(name_1, email, password);
                next();
            }
            catch (error) {
                res.status(400).json(_super.prototype.messageError.call(_this, error));
            }
        };
        return _this;
    }
    return VerifyRegisterMiddlewares;
}(request_model_1.RequestModel));
exports.VerifyRegisterMiddlewares = VerifyRegisterMiddlewares;
