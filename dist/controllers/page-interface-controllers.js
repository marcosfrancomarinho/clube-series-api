"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_model_1 = __importDefault(require("../util/request-model"));
class PageInterfaceControllers extends request_model_1.default {
    pageInterfaceRepository;
    constructor(pageInterfaceRepository) {
        super();
        this.pageInterfaceRepository = pageInterfaceRepository;
    }
    getDatasPageInterfaceDB = async (req, res) => {
        try {
            const response = await this.pageInterfaceRepository.getDatasPageInterface();
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).send(super.messageError(error));
        }
    };
}
exports.default = PageInterfaceControllers;
