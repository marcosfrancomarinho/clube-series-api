import { Response, Request, NextFunction } from "express";
import { RequestModel } from "../util/request.model";
import { IGenerateHash } from "../@types/generatehash";
import { IAuthenticateUserMiddlewares } from "../@types/authenticate.user.middlewares";

export class AuthenticateUserMiddlewares extends RequestModel implements IAuthenticateUserMiddlewares {
	constructor(private generateHash: IGenerateHash) {
		super();
	}
	private getToken(req: Request) {
		const token: string | undefined = req.headers["authorization"];
		if (!token || token.trim().length === 0) throw new Error("token invalido");
		return token;
	}
	public authenticationTokenUser = (req: Request, res: Response, next: NextFunction): void => {
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
