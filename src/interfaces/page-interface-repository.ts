import { IPage } from './Page';

export interface IPageInterfaceRepository {
	getDatasPageInterface(): Promise<IPage>;
}
