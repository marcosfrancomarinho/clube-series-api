"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyDatasUser = void 0;
var joi_1 = __importDefault(require("joi"));
var VerifyDatasUser = (function () {
    function VerifyDatasUser() {
    }
    VerifyDatasUser.prototype.hasError = function (params, schema) {
        var error = schema.validate(params).error;
        if (error)
            throw new Error(error.message);
    };
    VerifyDatasUser.prototype.nameUser = function (name) {
        var schema = joi_1.default.string().required().trim().min(3).max(30).empty().label("nome do usuário");
        this.hasError(name, schema);
    };
    VerifyDatasUser.prototype.emailUser = function (email) {
        var schema = joi_1.default.string().required().trim().min(10).max(35).email().empty().label("email do usuário");
        this.hasError(email, schema);
    };
    VerifyDatasUser.prototype.passwordUser = function (password) {
        var schema = joi_1.default.string().required().trim().min(8).max(15).empty().label("senha do usuário");
        this.hasError(password, schema);
    };
    VerifyDatasUser.prototype.registerUser = function (name, email, password) {
        try {
            this.nameUser(name);
            this.emailUser(email);
            this.passwordUser(password);
        }
        catch (error) {
            throw error;
        }
    };
    VerifyDatasUser.prototype.loginUser = function (email, password) {
        try {
            this.emailUser(email);
            this.passwordUser(password);
        }
        catch (error) {
            throw error;
        }
    };
    return VerifyDatasUser;
}());
exports.VerifyDatasUser = VerifyDatasUser;
