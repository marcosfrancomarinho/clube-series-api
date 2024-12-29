import { IMenuAdapterQueryCreate } from './@types/menu-adapter-query-create';

class MenuAdapterQueryCreate implements IMenuAdapterQueryCreate {

	addItem(item: string): Promise<void> {
		return new Promise(() => {});
		
	}
}

export default MenuAdapterQueryCreate;
