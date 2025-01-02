export interface IStructureAdapterCreateImage {
	createImage(imageObject: IImageObject): Promise<void>;
}

export interface IImageObject {
	url: string;
	title: string;
}
