import { IStructurSelecteAdapter } from "../@types/integrations/structure.select.adapter";
import {
	IStructureDbSelectServices,
	ISelectServicesResponse,
	ISelectServicesRequest,
} from "../@types/services/structure.db.select.services";
import { IFormatObject } from "../@types/utils/format.object";

export class StructureDbSelectServices implements IStructureDbSelectServices {
	constructor(private formatObject: IFormatObject) {}
	private listAdapters: IStructurSelecteAdapter[] = [];
	public searchAllContent = async (): Promise<ISelectServicesResponse> => {
		try {
			const names: string[] = this.listAdapters.map((item) => item.getAttribute().name);
			const adapters = this.listAdapters.map((adapter) => adapter.search());
			const response = (await Promise.all([...adapters])) as ISelectServicesRequest;
			const datasFormat: ISelectServicesResponse = this.formatObject.formatResponseInJson(names, response);
			return datasFormat;
		} catch (error) {
			throw error as Error;	
		}
	};
	public addAdapter = (...adapters: IStructurSelecteAdapter[]): void => {
		this.listAdapters = adapters;
	};
}
