import { Response, Request } from 'express';
import { IPage } from '../../model/Page/@types/Page';
import RequestModel from '../../util/request-model/request-model';
import { IPageInterfaceControllers } from './@types/page-interface-controllers';
import { IPageInterfaceAdapter } from '../../integrations/page-interface-adapter/@types/page-interface-adapter';

class PageInterfaceControllers
	extends RequestModel
	implements IPageInterfaceControllers
{
	private pageInterfaceAdapter!: IPageInterfaceAdapter;
	constructor(pageInterfaceAdapter: IPageInterfaceAdapter) {
		super();
		this.pageInterfaceAdapter = pageInterfaceAdapter;
	}
	public getDatasPageInterfaceDB = async (
		req: Request,
		res: Response,
	): Promise<void> => {
		try {
			const response: IPage = await this.pageInterfaceAdapter.querySelectPage();
			res.status(200).send(response);
		} catch (error) {
			res.status(400).send(super.messageError(error));
		}
	};
}
export default PageInterfaceControllers;
