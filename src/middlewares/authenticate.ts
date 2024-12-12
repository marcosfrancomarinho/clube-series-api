import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function authenticationTokenUser(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	try {
		const token: string | undefined = req.headers['authorization'];
		const keyScret: string | undefined = process.env.SECRET;
		if (!token) throw new Error('token invalido');
		const response = jwt.verify(token, keyScret as string) as {
			id: number;
			email: string;
		};
		next();
	} catch (error) {
		const messageError: string = (error as Error).message;
		res.status(400).json({ error: messageError });
	}
}

export default authenticationTokenUser;
