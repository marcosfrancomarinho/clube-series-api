import { Response, Request } from 'express';
import { IPage } from '../../model/Page/@types/Page';
import RequestModel from '../../util/request-model/request-model';
import { IPageInterfaceControllers } from './@types/page-interface-controllers';
import { IPageInterfaceRepository } from '../../repositories/page-interface-repository/@types/page-interface-repository';

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
			const response: IPage = await this.pageInterfaceRepository.querySelectPage();
			res.status(200).send(response);
		} catch (error) {
			res.status(400).send(super.messageError(error));
		}
	};
}
export default PageInterfaceControllers;
