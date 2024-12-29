import { Sequelize } from 'sequelize';
import Page from '../../../model/Page/Page';
import { IVerifyDatasObjectImages } from '../../../util/verify-datas/@types/verify-datas-object-image';
import {
	IImageObject,
	IImageadapterQueryCreate,
} from './@types/image-adapter-query-create';

class ImageAdapterQueryCreate implements IImageadapterQueryCreate {
	private page!: typeof Page;
	private verifyDatasObjectImages!: IVerifyDatasObjectImages;
	private messageError: string = 'Fail seach datas images';

	constructor(
		page: typeof Page,
		verifyDatasObjectImages: IVerifyDatasObjectImages,
	) {
		this.page = page;
		this.verifyDatasObjectImages = verifyDatasObjectImages;
	}

	private sqlInsert = (items: IImageObject): string => {
		const sql: string = `
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

	public addItem = async (items: IImageObject): Promise<void> => {
		try {
			this.verifyDatasObjectImages.imagesObject(items);
			await this.page.update(
				{
					images: Sequelize.literal(this.sqlInsert(items)),
				},
				{
					where: { title: 'Clube das Séries' },
				},
			);
		} catch (error) {
			throw new Error(this.messageError);
		}
	};
}
export default ImageAdapterQueryCreate;
