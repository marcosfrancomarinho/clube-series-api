import { Response, Request } from 'express';
import RequestModel from '../../util/request-model/request-model';
import { IPageInterfaceControllers } from './@types/page-interface-controllers';
import {
	IAttributesSelectDb,
	IStructureDbSelectService,
	IStructureDbSelectServiceResponse,
} from '../../service/structure-db-select-service/@types/structure-db-select-service';

class PageInterfaceControllers
	extends RequestModel
	implements IPageInterfaceControllers
{
	constructor(
		private structureDbSelectService: IStructureDbSelectService,
		private option_query_select_attributes_db: IAttributesSelectDb,
	) {
		super();
	}
	public getDatasPageInterfaceDB = async (
		req: Request,
		res: Response,
	): Promise<void> => {
		try {
			const response: IStructureDbSelectServiceResponse =
				await this.structureDbSelectService.searchAllContent(
					this.option_query_select_attributes_db,
				);
			res.status(200).send(response);
		} catch (error) {
			res.status(400).send(super.messageError(error));
		}
	};
}
export default PageInterfaceControllers;
