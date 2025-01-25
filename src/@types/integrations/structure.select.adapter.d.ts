export interface IStructurSelecteAdapter<T> {
	search(attribtues: string[]): Promise<T[] | T>;
}
