import { IPage } from "../../../model/Page/@types/Page";

export interface IPageInterfaceAdapter {
	querySelectPage(): Promise<IPage>;
}
