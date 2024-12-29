import { IPage } from "../../../model/Page/@types/Page";

export interface IPageInterfaceRepository {
	querySelectPage(): Promise<IPage>;
}
