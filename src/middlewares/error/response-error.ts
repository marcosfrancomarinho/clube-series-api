import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { IResponseError } from './@types/response-error';
import RequestModel from '../../util/request-model/request-model';

class ResponseError extends RequestModel implements IResponseError {
	public error = (
		error: ErrorRequestHandler,
		req: Request,
		res: Response,
		next:NextFunction
	): void => {
		res.status(400).send(super.messageError(error))
	};
}

export default ResponseError;
