import { ObjectSchema, Root } from 'joi';

import { IVerifyDatasObjectImages } from './@types/verify-datas-object-image';


class VerifyDatasObjectImages implements IVerifyDatasObjectImages {
	private joi!: Root;
	constructor(joi: Root) {
		this.joi = joi;
	}
	private hasError(
		params: any,
		schema: ObjectSchema<any>,
	): void {
		const { error } = schema.validate(params);
		if (error) throw new Error(error.message);
	}
	imagesObject(items: any): void {
		const schema: ObjectSchema<any> = this.joi.object({
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



//EM DESENVOLVIMENTO