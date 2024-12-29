import { IPage } from '../interfaces/Page';
import { IPageInterfaceRepository } from '../interfaces/page-interface-repository';
import Page from '../model/Page';

class PageInterfaceRepository implements IPageInterfaceRepository {
	private page!: typeof Page;
	constructor(page: typeof Page) {
		this.page = page;
	}
	public getDatasPageInterface = async (): Promise<IPage> => {
		const datas = await this.page.findOne({ where: { id: 1 }, raw: true });
		return datas as IPage;
	};
}
export default PageInterfaceRepository;
