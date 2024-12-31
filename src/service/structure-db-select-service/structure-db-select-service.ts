import { IStructureAdapterSelect } from '../../integrations/structure-adapter/structure-select-adapter/@types/structure-select-adapter';
import {
	IAttributesSelectDb,
	IStructureDbSelectService,
	IStructureDbSelectServiceResponse,
} from './@types/structure-db-select-service';

class StructureDbSelectService<F, M, I> implements IStructureDbSelectService {
	private structureAdapterSelectFooter!: IStructureAdapterSelect<F>;
	private structureAdapterSelectImages!: IStructureAdapterSelect<I>;
	private structureAdapterSelectMenu!: IStructureAdapterSelect<M>;
	constructor(
		structureAdapterSelectFooter: IStructureAdapterSelect<F>,
		structureAdapterSelectImage: IStructureAdapterSelect<I>,
		structureAdapterSelectMenu: IStructureAdapterSelect<M>,
	) {
		this.structureAdapterSelectFooter = structureAdapterSelectFooter;
		this.structureAdapterSelectImages = structureAdapterSelectImage;
		this.structureAdapterSelectMenu = structureAdapterSelectMenu;
	}
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
