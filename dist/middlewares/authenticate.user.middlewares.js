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
exports.AuthenticateUserMiddlewares = void 0;
var request_model_1 = require("../util/request.model");
var AuthenticateUserMiddlewares = (function (_super) {
    __extends(AuthenticateUserMiddlewares, _super);
    function AuthenticateUserMiddlewares(generateHash) {
        var _this = _super.call(this) || this;
        _this.generateHash = generateHash;
        _this.authenticationTokenUser = function (req, res, next) {
            try {
                var token = _this.getToken(req);
                var response = _this.generateHash.verify(token);
                res.locals.token = response;
                next();
            }
            catch (error) {
                res.status(400).json(_super.prototype.messageError.call(_this, error));
            }
        };
        return _this;
    }
    AuthenticateUserMiddlewares.prototype.getToken = function (req) {
        var token = req.headers["authorization"];
        if (!token || token.trim().length === 0)
            throw new Error("token invalido");
        return token;
    };
    return AuthenticateUserMiddlewares;
}(request_model_1.RequestModel));
exports.AuthenticateUserMiddlewares = AuthenticateUserMiddlewares;
