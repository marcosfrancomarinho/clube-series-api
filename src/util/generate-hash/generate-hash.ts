import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IGenerateHash from './@types/generate-hash';

dotenv.config();

class GenerateHash implements IGenerateHash {
	public hash = (email: string, id: number): string => {
		const keySecret = process.env.SECRET;
		if (!keySecret) {
			throw new Error('A variável de ambiente SECRET não está definida.');
		}
		const token: string = jwt.sign({ email, id }, keySecret);
		return token;
	};

	public verify = (token: string): JwtPayload | string => {
		const keySecret = process.env.SECRET;
		if (!keySecret) {
			throw new Error('A variável de ambiente SECRET não está definida.');
		}
		return jwt.verify(token, keySecret);
	};
}

export default GenerateHash;
