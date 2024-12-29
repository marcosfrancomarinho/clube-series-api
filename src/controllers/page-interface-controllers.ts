import { Response, Request } from 'express';
import { IPageInterfaceControllers } from '../interfaces/page-interface-controllers';
import { IPageInterfaceRepository } from '../interfaces/page-interface-repository';
import RequestModel from '../util/request-model';

class PageInterfaceControllers
	extends RequestModel
	implements IPageInterfaceControllers
{
	private pageInterfaceRepository!: IPageInterfaceRepository;
	constructor(pageInterfaceRepository: IPageInterfaceRepository) {
		super();
		this.pageInterfaceRepository = pageInterfaceRepository;
	}
	public getDatasPageInterface = async (
		req: Request,
		res: Response,
	): Promise<void> => {
		try {
			const response = await this.pageInterfaceRepository.getDatasPageInterface();
			res.status(200).send(response);
		} catch (error) {
			res.status(400).send(super.messageError(error));
		}
	};
}
export default PageInterfaceControllers;
