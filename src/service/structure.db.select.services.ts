import { IStructurSelecteAdapter } from "../@types/structure.select.adapter";
import {
	IAttributesSelectDb,
	IStructureDbSelectServices,
	ISelectServicesResponse,
} from "../@types/structure.db.select.services";

export class StructureDbSelectServices<F, M, I> implements IStructureDbSelectServices {
	constructor(
		private structureAdapterSelectFooter: IStructurSelecteAdapter<F>,
		private structureAdapterSelectImages: IStructurSelecteAdapter<I>,
		private structureAdapterSelectMenu: IStructurSelecteAdapter<M>
	) {}

	public searchAllContent = async ({
		attrFooter,
		attrImages,
		attrMenu,
	}: IAttributesSelectDb): Promise<ISelectServicesResponse> => {
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
			} as unknown as ISelectServicesResponse;
		} catch (error) {
			throw error;
		}
	};
}
