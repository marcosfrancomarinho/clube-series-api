import jwt, { JwtPayload } from "jsonwebtoken";
import { IGenerateHash } from "../@types/utils/generate.hash";


export class GenerateHash implements IGenerateHash {
	public hash = (email: string, id: number): string => {
		const keySecret = process.env.SECRET;
		if (!keySecret) {
			throw new Error("A variável de ambiente não está definida.");
		}
		const token: string = jwt.sign({ email, id }, keySecret);
		return token;
	};

	public verify = (token: string): JwtPayload | string => {
		const keySecret = process.env.SECRET;
		if (!keySecret) {
			throw new Error("A variável de ambiente SECRET não está definida.");
		}
		return jwt.verify(token, keySecret);
	};
}
