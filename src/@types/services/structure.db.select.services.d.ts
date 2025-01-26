import { IStructurSelecteAdapter } from "../integrations/structure.select.adapter";
import { IStructureFooter } from "../model/structure.footer.model";
import { IStructureImages } from "../model/structure.images.model";
import { IStructureMenu } from "../model/structure.menu.model";

export interface IStructureDbSelectServices {
	searchAllContent(): Promise<ISelectServicesResponse>;
	addAdapter(structures: IStructurSelecteAdapter): void;
}

export interface IAttribute {
	name: string;
	list: string[];
}

export interface IAttributesSelectDb {
	footer: IAttribute;
	images: IAttribute;
	menu: IAttribute;
}

export type ISelectServicesRequest = [IStructureFooter[], IStructureImages[], IStructureMenu[]];
export type ISelectServicesResponse = { footer: IStructureFooter[]; images: IStructureImages[]; menu: IStructureMenu[] };
