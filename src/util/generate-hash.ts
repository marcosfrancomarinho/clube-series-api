import { sign, verify, JwtPayload } from 'jsonwebtoken';
import IGenerateHash from '../interfaces/igeneate-hash';
import dotenv from 'dotenv';

dotenv.config();

class GenerateHash implements IGenerateHash {
	constructor(private jwt: { sign: typeof sign; verify: typeof verify }) {}

	public hash = (email: string, id: number): string => {
		const keySecret = process.env.SECRET;
		if (!keySecret) {
			throw new Error('A variável de ambiente SECRET não está definida.');
		}
		const token: string = this.jwt.sign({ email, id }, keySecret);
		return token;
	};

	public verify = (token: string): JwtPayload | string => {
		const keySecret = process.env.SECRET;
		if (!keySecret) {
			throw new Error('A variável de ambiente SECRET não está definida.');
		}
		return this.jwt.verify(token, keySecret);
	};
}

export default GenerateHash;
