import { IStructureAdapterSelect } from '../../integrations/structure-adapter/structure-select-adapter/@types/structure-select-adapter';
import {
	IAttributesSelectDb,
	IMenu,
	IStructureDbSelectService,
	IStructureDbSelectServiceResponse,
} from './@types/structure-db-select-service';

class StructureDbSelectService<F, M, I> implements IStructureDbSelectService {
	constructor(
		private structureAdapterSelectFooter: IStructureAdapterSelect<F>,
		private structureAdapterSelectImages: IStructureAdapterSelect<I>,
		private structureAdapterSelectMenu: IStructureAdapterSelect<M>,
	) {}
	public searchAllContent = async ({
		attrFooter,
		attrImages,
		attrMenu,
	}: IAttributesSelectDb): Promise<IStructureDbSelectServiceResponse> => {
		try {
			const [footer, images, menu] = await Promise.all([
				this.structureAdapterSelectFooter.search(attrFooter),
				this.structureAdapterSelectImages.search(attrImages),
				this.structureAdapterSelectMenu.search(attrMenu),
			]);
			const $menu = (menu as IMenu)[0];
			return {
				footer,
				images,
				menu: $menu,
			} as unknown as IStructureDbSelectServiceResponse;
		} catch (error) {
			throw error;
		}
	};
}
export default StructureDbSelectService;
