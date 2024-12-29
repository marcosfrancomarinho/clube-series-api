import { ObjectSchema, Root } from 'joi';

import { IVerifyDatasObjectImages } from './@types/verify-datas-object-image';
import { IImageObject } from '../../integrations/image-adapter/image-adapter-query-create/@types/image-adapter-query-create';

class VerifyDatasObjectImages implements IVerifyDatasObjectImages {
	private joi!: Root;
	constructor(joi: Root) {
		this.joi = joi;
	}
	private hasError(
		params: IImageObject,
		schema: ObjectSchema<IImageObject>,
	): void {
		const { error } = schema.validate(params);
		if (error) throw new Error(error.message);
	}
	imagesObject(items: IImageObject): void {
		const schema: ObjectSchema<IImageObject> = this.joi.object({
			title: this.joi
				.string()
				.trim()
				.empty()
				.required()
				.min(3)
				.label('Titulo da Imagem'),
			url: this.joi
				.string()
				.trim()
				.empty()
				.required()
				.min(5)
				.label('URL da Imagem'),
		});
		this.hasError(items, schema);
	}
}
export default VerifyDatasObjectImages;
