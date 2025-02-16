import { Response, Request, NextFunction } from "express";
import { RequestModel } from "../util/request.model";
import { IStructureDbSelectServices } from "../@types/services/structure.db.select.services";
import { IPageInterfaceControllers } from "../@types/controllers/page.interface.controllers";

export class PageInterfaceControllers extends RequestModel implements IPageInterfaceControllers {
	constructor(private structureDbSelectService: IStructureDbSelectServices) {
		super();
	}
	public getDatasPageInterfaceDB = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const response = await this.structureDbSelectService.searchAllContent();
			res.status(200).send(response);
		} catch (error) {
			next(error);
		}
	};
}
