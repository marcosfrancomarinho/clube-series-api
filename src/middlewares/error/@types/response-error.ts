import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

export interface IResponseError {
	error(
		error: ErrorRequestHandler,
		req: Request,
		res: Response,
		next: NextFunction,
	): void;
}
