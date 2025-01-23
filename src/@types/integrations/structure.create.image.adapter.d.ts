export interface IStructureCreateImageAdapter {
	createImage(imageObject: IImageObject): Promise<void>;
}

export interface IImageObject {
	url: string;
	title: string;
}
