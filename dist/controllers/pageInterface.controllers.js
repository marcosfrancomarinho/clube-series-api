"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageInterfaceControllers = void 0;
const request_model_1 = require("../util/request.model");
class PageInterfaceControllers extends request_model_1.RequestModel {
    structureDbSelectService;
    option_query_select_attributes_db;
    constructor(structureDbSelectService, option_query_select_attributes_db) {
        super();
        this.structureDbSelectService = structureDbSelectService;
        this.option_query_select_attributes_db = option_query_select_attributes_db;
    }
    getDatasPageInterfaceDB = async (req, res, next) => {
        try {
            const response = await this.structureDbSelectService.searchAllContent(this.option_query_select_attributes_db);
            res.status(200).send(response);
        }
        catch (error) {
            next(error);
        }
    };
}
exports.PageInterfaceControllers = PageInterfaceControllers;
