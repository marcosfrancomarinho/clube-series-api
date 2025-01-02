import { IStructureAdapterSelect } from '../../integrations/structure-adapter/structure-select-adapter/@types/structure-select-adapter';
import {
	IAttributesSelectDb,
	IMenu,
	IStructureDbSelectService,
	ISelectServiceResponse,
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
	}: IAttributesSelectDb): Promise<ISelectServiceResponse> => {
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
			} as unknown as ISelectServiceResponse;
		} catch (error) {
			throw error;
		}
	};
}
export default StructureDbSelectService;
