import StructureImages from '../../../../model/structure/structure-images/structure-images';
import {
	IImageObject,
	IStructureAdapterCreateImage,
} from './@types/structure-adapter-create-image';
import { IVerifyDatasObjectImages } from '../../../../util/verify-datas/@types/verify-datas-object-image';

class StructureAdapterCreateImage implements IStructureAdapterCreateImage {
	constructor(
		private structureImage: typeof StructureImages,
		private verifyDatasObjectImages: IVerifyDatasObjectImages,
	) {}
	public createImage = async (imageObject: IImageObject): Promise<void> => {
		try {
			this.verifyDatasObjectImages.verify(imageObject);
			await this.structureImage.create(imageObject);
		} catch (error) {
			throw error as Error;
		}
	};
}
export default StructureAdapterCreateImage;
