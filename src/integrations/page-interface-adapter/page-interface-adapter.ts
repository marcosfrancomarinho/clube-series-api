import { IPage } from '../../model/Page/@types/Page';
import Page from '../../model/Page/Page';
import { IPageInterfaceAdapter } from './@types/page-interface-adapter';

class PageInterfaceAdapter implements IPageInterfaceAdapter {
	private page!: typeof Page;
	private messageError: string = 'Fail search datas';
	private atribute: string[] = ['images', 'footer', 'menu', 'id', 'title'];
	constructor(page: typeof Page) {
		this.page = page;
	}
	public querySelectPage = async (): Promise<IPage> => {
		try {
			const datas = await this.page.findOne({
				where: { id: 1 },
				raw: true,
				attributes: this.atribute,
			});
			if (!datas) throw new Error(this.messageError);
			return datas as IPage;
		} catch (error) {
			throw error;
		}
	};
}
export default PageInterfaceAdapter;
