import { IStructureFooter } from '../../../model/structure/structure-footer/@types/structure-footer';
import { IStructureImages } from '../../../model/structure/structure-images/@types/structure-images';
import { IStructureMenu } from '../../../model/structure/structure-menu/@types/structure-menu';

export interface IStructureDbSelectService {
	searchAllContent(
		attr: IAttributesSelectDb,
	): Promise<ISelectServiceResponse>;
}
export interface IAttributesSelectDb {
	attrFooter: string[];
	attrImages: string[];
	attrMenu: string[];
}

export interface ISelectServiceResponse {
	footer: IStructureFooter[];
	images: IStructureImages[];
	menu: IStructureMenu[];
}
export type IMenu = Array<
	[{ public: string[]; priavate: string[]; title: string }]
>;
