import { Response, Request } from 'express';
import { IPageInterfaceControllers } from '../interfaces/page-interface-controllers';
import { IPageInterfaceRepository } from '../interfaces/page-interface-repository';
import RequestModel from '../util/request-model';
import { IPage } from '../interfaces/Page';

class PageInterfaceControllers
	extends RequestModel
	implements IPageInterfaceControllers
{
	private pageInterfaceRepository!: IPageInterfaceRepository;
	constructor(pageInterfaceRepository: IPageInterfaceRepository) {
		super();
		this.pageInterfaceRepository = pageInterfaceRepository;
	}
	public getDatasPageInterfaceDB = async (
		req: Request,
		res: Response,
	): Promise<void> => {
		try {
			const response: IPage =
				await this.pageInterfaceRepository.getDatasPageInterface();
			res.status(200).send(response);
		} catch (error) {
			res.status(400).send(super.messageError(error));
		}
	};
}
export default PageInterfaceControllers;
