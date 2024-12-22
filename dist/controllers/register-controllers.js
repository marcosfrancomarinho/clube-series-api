"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_model_1 = __importDefault(require("../util/request-model"));
class RegisterControllers extends request_model_1.default {
    registerUserDb;
    constructor(registerUserDb) {
        super();
        this.registerUserDb = registerUserDb;
    }
    registerUser = async (req, res) => {
        try {
            const datas = super.getDatasBodyRegister(req);
            const response = await this.registerUserDb.register(datas);
            res.status(200).json(response);
        }
        catch (error) {
            res.status(400).json(super.messageError(error));
        }
    };
}
exports.default = RegisterControllers;
