import { IImageObject } from '../../../integrations/structure-adapter/structure-adapter-create/structure-adapter-create-image/@types/structure-adapter-create-image';

export interface IVerifyDatasObjectImages {
	verify(imageObject: IImageObject): void;
}
