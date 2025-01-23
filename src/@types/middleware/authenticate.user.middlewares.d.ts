import  {Response, Request, NextFunction } from 'express';

export interface IAuthenticateUserMiddlewares {
	authenticationTokenUser(req: Request, res: Response, next: NextFunction): void;
}

