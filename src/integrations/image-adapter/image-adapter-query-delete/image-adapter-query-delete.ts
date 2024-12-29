import Page from '../../../model/Page/Page';
import { IImageadapterQueryDelete } from './@types/image-adapter-query-delete';

class ImageAdapterQueryDelete implements IImageadapterQueryDelete {
	private page: typeof Page;
	constructor(page: typeof Page) {
		this.page = page;
	}
	public removeItem = async (title: string): Promise<void> => {
		try {
			await this.page.destroy({
				
			});
		} catch (error) {}
	};
}
export default ImageAdapterQueryDelete;
