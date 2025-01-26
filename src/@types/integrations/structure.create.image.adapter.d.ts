export type IImageObject = { url: string; title: string };

export interface IStructureCreateImageAdapter {
	createImage(imageObject: IImageObject): Promise<void>;
}
