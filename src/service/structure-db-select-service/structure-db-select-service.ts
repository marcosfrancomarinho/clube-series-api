import { IStructureAdapterSelect } from '../../integrations/structure-adapter/structure-select-adapter/@types/structure-select-adapter';
import {
	IAttributesSelectDb,
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
			console.log((footer as unknown as Array<string>).length)
			console.log((images as unknown as Array<string>).length)
			console.log((menu as unknown as Array<string>).length)
			return {
				footer,
				images,
				menu,
			} as unknown as IStructureDbSelectServiceResponse;
		} catch (error) {
			throw error;
		}
	};
}
export default StructureDbSelectService;
