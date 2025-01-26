import { ISelectServicesRequest, ISelectServicesResponse } from "../@types/services/structure.db.select.services";
import { IFormatObject } from "../@types/utils/format.object";

export class FormatObject implements IFormatObject {
	public formatResponseInJson = (keys: string[], listStructure: ISelectServicesRequest): ISelectServicesResponse => {
		const datasFormat = listStructure.reduce((accumulatorObject, structureItem, index) => {
			const key: string = keys[index];
			const length: number = structureItem.length;
			accumulatorObject[key] = length === 1 ? structureItem.at(0) : structureItem;
			return accumulatorObject;
		}, {} as Record<string, unknown>);
		return datasFormat as ISelectServicesResponse;
	};
}
