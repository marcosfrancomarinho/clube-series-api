import joi, { ObjectSchema } from "joi";

import { IVerifyDatasObjectImages } from "../@types/utils/verify.datas.object.image";

export class VerifyDatasObjectImages implements IVerifyDatasObjectImages {
	private hasError(params: any, schema: ObjectSchema<any>): void {
		const { error } = schema.validate(params);
		if (error) throw new Error(error.message);
	}
	public verify = (imageObject: any): void => {
		const schema: ObjectSchema<any> = joi.object({
			title: joi.string().trim().empty().required().min(3).label("Titulo da Imagem"),
			url: joi.string().trim().empty().required().min(5).label("URL da Imagem"),
		});
		this.hasError(imageObject, schema);
	};
}
