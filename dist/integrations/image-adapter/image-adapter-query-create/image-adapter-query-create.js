"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class ImageAdapterQueryCreate {
    page;
    verifyDatasObjectImages;
    messageError = 'Fail seach datas images';
    constructor(page, verifyDatasObjectImages) {
        this.page = page;
        this.verifyDatasObjectImages = verifyDatasObjectImages;
    }
    sqlInsert = (items) => {
        const sql = `
		CASE
			WHEN NOT EXISTS (
				SELECT
					1
				FROM
					jsonb_array_elements(images) AS elem
				WHERE
					elem ->> 'title' = '${items.title}'
			)THEN images || '${JSON.stringify(items)}' :: jsonb
			ELSE images
		END`;
        return sql;
    };
    addItem = async (items) => {
        try {
            this.verifyDatasObjectImages.imagesObject(items);
            await this.page.update({
                images: sequelize_1.Sequelize.literal(this.sqlInsert(items)),
            }, {
                where: { title: 'Clube das Séries' },
            });
        }
        catch (error) {
            throw new Error(this.messageError);
        }
    };
}
exports.default = ImageAdapterQueryCreate;
