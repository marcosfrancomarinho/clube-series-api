"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_model_1 = __importDefault(require("../../util/request-model/request-model"));
class VerifyRegister extends request_model_1.default {
    verifyDatasUser;
    constructor(verifyDatasUser) {
        super();
        this.verifyDatasUser = verifyDatasUser;
    }
    verifyDatasBodyUserRegister = (req, res, next) => {
        try {
            const { name, email, password } = super.getDatasBodyRegister(req);
            this.verifyDatasUser.registerUser(name, email, password);
            next();
        }
        catch (error) {
            res.status(400).json(super.messageError(error));
        }
    };
}
exports.default = VerifyRegister;
