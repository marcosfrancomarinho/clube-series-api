import { Response, Request, NextFunction } from 'express';

interface IAuthenticateUser {
	authenticationTokenUser(req: Request, res: Response, next: NextFunction): void;
}

export default IAuthenticateUser;
