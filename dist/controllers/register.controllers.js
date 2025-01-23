"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterControllers = void 0;
const request_model_1 = require("../util/request.model");
class RegisterControllers extends request_model_1.RequestModel {
    registerUserDb;
    constructor(registerUserDb) {
        super();
        this.registerUserDb = registerUserDb;
    }
    registerUser = async (req, res, next) => {
        try {
            const datas = super.getDatasBodyRegister(req);
            const response = await this.registerUserDb.register(datas);
            res.status(201).json(response);
        }
        catch (error) {
            next(error);
        }
    };
}
exports.RegisterControllers = RegisterControllers;
