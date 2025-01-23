import { IImageObject } from "../integrations/structure.create.image.adapter";

export interface IVerifyDatasObjectImages {
	verify(imageObject: IImageObject): void;
}
