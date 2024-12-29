"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImageAdapterQueryCreate {
    page;
    sequelize;
    verifyDatasObjectImages;
    messageError = 'Fail seach datas images';
    constructor(page, verifyDatasObjectImages, sequelize) {
        this.page = page;
        this.verifyDatasObjectImages = verifyDatasObjectImages;
        this.sequelize = sequelize;
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
                images: this.sequelize.literal(this.sqlInsert(items)),
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
