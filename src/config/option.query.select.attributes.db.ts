import { IAttributesSelectDb } from "../@types/services/structure.db.select.services";

export const option_query_select_attributes_db: IAttributesSelectDb = {
	footer: { table: "structure_footer", name: "footer", list: ["id", "url", "redes"] },
	images: { table: "structure_images", name: "images", list: ["url", "title", "id"] },
	menu: { table: "structure_menu", name: "menu", list: ["public", "private", "title"] },
};
