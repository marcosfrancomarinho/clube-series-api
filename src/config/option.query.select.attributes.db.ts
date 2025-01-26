import { IAttributesSelectDb } from "../@types/services/structure.db.select.services";

export const option_query_select_attributes_db: IAttributesSelectDb = {
	footer: { name: "footer", list: ["id", "url", "redes"] },
	images: { name: "images", list: ["url", "title", "id"] },
	menu: { name: "menu", list: ["public", "private", "title"] },
	
};
