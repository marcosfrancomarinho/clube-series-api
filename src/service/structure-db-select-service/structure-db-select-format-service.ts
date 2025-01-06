import { IStructureMenu } from '../../model/structure/structure-menu/@types/structure-menu';
import {
	IAttributesSelectDb,
	ISelectServiceResponse,
	IStructureDbSelectService,
} from './@types/structure-db-select-service';

class StructureDbSelectFormatService implements IStructureDbSelectService {
	constructor(private structureDbSelectService: IStructureDbSelectService) {}
	public searchAllContent = async (
		attr: IAttributesSelectDb,
	): Promise<ISelectServiceResponse> => {
		const datas = await this.structureDbSelectService.searchAllContent(attr);
		const _menu: IStructureMenu = (datas.menu as IStructureMenu[])[0];
		return {
			footer: datas.footer,
			images: datas.images,
			menu: _menu,
		};
	};
}
export default StructureDbSelectFormatService;
