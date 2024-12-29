import { IPage } from '../../model/Page/@types/Page';
import Page from '../../model/Page/Page';
import { IPageInterfaceRepository } from './@types/page-interface-repository';

class PageInterfaceRepository implements IPageInterfaceRepository {
	private page!: typeof Page;
	constructor(page: typeof Page) {
		this.page = page;
	}
	public querySelectPage = async (): Promise<IPage> => {
		const datas = await this.page.findOne({
			where: { id: 1 },
			raw: true,
			attributes: ['images', 'footer', 'menu', 'id', 'title'],
		});
		return datas as IPage;
	};
}
export default PageInterfaceRepository;
