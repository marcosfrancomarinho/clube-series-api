import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { IResponseErrorMiddlewares } from "../@types/response.error.middlewares";
import { RequestModel } from "../util/request.model";

export class ResponseErrorMiddlewares extends RequestModel implements IResponseErrorMiddlewares {
	public error = (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction): void => {
		res.status(400).send(super.messageError(error));
	};
}
