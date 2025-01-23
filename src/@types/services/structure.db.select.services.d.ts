import { IStructureFooter } from "../model/structure.footer.model";
import { IStructureImages } from "../model/structure.images.model";
import { IStructureMenu } from "../model/structure.menu.model";

export interface IStructureDbSelectServices {
	searchAllContent(attr: IAttributesSelectDb): Promise<ISelectServicesResponse>;
}
export interface IAttributesSelectDb {
	attrFooter: string[];
	attrImages: string[];
	attrMenu: string[];
}

export interface ISelectServicesResponse {
	footer: IStructureFooter[];
	images: IStructureImages[];
	menu: IStructureMenu;
}
export type IMenu = Array<[{ public: string[]; priavate: string[]; title: string }]>;
