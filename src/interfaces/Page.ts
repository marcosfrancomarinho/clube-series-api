export interface IPage {
	id: number;
	images: IPhoto[];
	menu: IMenu;
	title: string;
	footer: iFooter[];
	readonly createdAt?: Date;
	readonly updatedAt?: Date;
}

export interface IPhoto {
	title: string;
	url: string;
}
export interface IMenu {
	public: string[];
	private: string[];
}
export interface iFooter {
	id: number;
	url: string;
	redes: string;
}
