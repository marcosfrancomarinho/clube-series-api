import { ISelectServicesRequest, ISelectServicesResponse } from "../services/structure.db.select.services";

export interface IFormatObject {
	formatResponseInJson(key: string[], listStructure: ISelectServicesRequest): ISelectServicesResponse;
}
