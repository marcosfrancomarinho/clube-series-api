import { IStructurSelecteAdapter } from "../integrations/structure.select.adapter";
import { IStructureFooter, IStructureImages, IStructureMenu } from "../model/structure.model";

export type IAttribute = { name: string; list: string[]; table: string };
export type IAttributesSelectDb = { footer: IAttribute; images: IAttribute; menu: IAttribute };
export type ISelectServicesRequest = [IStructureFooter[], IStructureImages[], IStructureMenu[]];
export type ISelectServicesResponse = { footer: IStructureFooter[]; images: IStructureImages[]; menu: IStructureMenu[] };

export interface IStructureDbSelectServices {
	searchAllContent(): Promise<ISelectServicesResponse>;
	addAdapter(structures: IStructurSelecteAdapter): void;
}
