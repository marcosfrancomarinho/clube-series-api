import { Response, Request, NextFunction } from 'express';
import GenerateHash from '../util/generate-hash';

class AuthenticateUser {
	constructor(private generateHash: GenerateHash) {}
	public authenticationTokenUser = (
		req: Request,
		res: Response,
		next: NextFunction,
	): void => {
		try {
			const token: string | undefined = req.headers['authorization'];
			if (!token) throw new Error('token invalido');
			const response = this.generateHash.verify(token) as {
				id: number;
				email: string;
			};
			res.locals.token = response;
			next();
		} catch (error) {
			const messageError: string = (error as Error).message;
			res.status(400).json({ error: messageError });
		}
	};
}

export default AuthenticateUser;
