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
exports.VerifyLoginMiddlewares = void 0;
var request_model_1 = require("../util/request.model");
var VerifyLoginMiddlewares = (function (_super) {
    __extends(VerifyLoginMiddlewares, _super);
    function VerifyLoginMiddlewares(verifyDatasUser) {
        var _this = _super.call(this) || this;
        _this.verifyDatasUser = verifyDatasUser;
        _this.verifyDatasBodyUserLogin = function (req, res, next) {
            try {
                var _a = _super.prototype.getDatasBodyLogin.call(_this, req), email = _a.email, password = _a.password;
                _this.verifyDatasUser.loginUser(email, password);
                next();
            }
            catch (error) {
                res.status(400).json(_super.prototype.messageError.call(_this, error));
            }
        };
        return _this;
    }
    return VerifyLoginMiddlewares;
}(request_model_1.RequestModel));
exports.VerifyLoginMiddlewares = VerifyLoginMiddlewares;
