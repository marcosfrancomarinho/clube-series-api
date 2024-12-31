export interface IStructureAdapterSelect<T> {
	search(attribtues:string[]): Promise<T>;
}
