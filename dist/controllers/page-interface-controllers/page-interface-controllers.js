"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_model_1 = __importDefault(require("../../util/request-model/request-model"));
class PageInterfaceControllers extends request_model_1.default {
    structureDbSelectService;
    option_query_select_attributes_db;
    constructor(structureDbSelectService, option_query_select_attributes_db) {
        super();
        this.structureDbSelectService = structureDbSelectService;
        this.option_query_select_attributes_db = option_query_select_attributes_db;
    }
    getDatasPageInterfaceDB = async (req, res) => {
        try {
            const response = await this.structureDbSelectService.searchAllContent(this.option_query_select_attributes_db);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).send(super.messageError(error));
        }
    };
}
exports.default = PageInterfaceControllers;
