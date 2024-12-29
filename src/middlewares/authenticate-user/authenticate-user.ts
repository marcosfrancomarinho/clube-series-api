import { Response, Request, NextFunction}  from 'express';
import RequestModel from '../../util/request-model/request-model';
import IGenerateHash from '../../util/generate-hash/@types/generate-hash';
import IAuthenticateUser from './@types/authenticate-user';

class AuthenticateUser extends RequestModel implements IAuthenticateUser {
	private generateHash: IGenerateHash;
	constructor(generateHash: IGenerateHash) {
		super();
		this.generateHash = generateHash;
	}
	private getToken(req: Request) {
		const token: string | undefined = req.headers['authorization'];
		if (!token || token.trim().length === 0) throw new Error('token invalido');
		return token;
	}
	public authenticationTokenUser = (
		req: Request,
		res: Response,
		next: NextFunction,
	): void => {
		try {
			const token: string = this.getToken(req);
			const response = this.generateHash.verify(token);
			res.locals.token = response;
			next();
		} catch (error) {
			res.status(400).json(super.messageError(error));
		}
	};
}

export default AuthenticateUser;
