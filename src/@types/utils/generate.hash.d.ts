import { JwtPayload } from "jsonwebtoken";

export interface IGenerateHash {
	hash(email: string, id: number): string;
	verify(token: string): JwtPayload | string;
}
