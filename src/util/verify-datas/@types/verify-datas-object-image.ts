import { IImageObject } from "../../../integrations/image-adapter/image-adapter-query-create/@types/image-adapter-query-create";


export interface IVerifyDatasObjectImages {
	imagesObject(items: IImageObject): void;
}
