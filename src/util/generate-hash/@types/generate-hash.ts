import {JwtPayload} from 'jsonwebtoken';

interface IGenerateHash {
	hash(email: string, id: number): string;
	verify(token: string): JwtPayload | string;
}

export default IGenerateHash;
