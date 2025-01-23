import { IImageObject, IStructureCreateImageAdapter } from "../@types/structure.create.image.adapter";
import { IVerifyDatasObjectImages } from "../@types/verify.datas.object.image";

export class StructureCreateImageAdapter implements IStructureCreateImageAdapter {
	constructor(private verifyDatasObjectImages: IVerifyDatasObjectImages) {}
	public createImage = async (imageObject: IImageObject): Promise<void> => {
		try {
			this.verifyDatasObjectImages.verify(imageObject);
		} catch (error) {
			throw error as Error;
		}
	};
}
