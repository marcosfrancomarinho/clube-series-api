export interface IImageadapterQueryCreate {
	addItem(item: IImageObject): Promise<void>;
}

export interface IImageObject {
	title: string;
	url: string;
}
