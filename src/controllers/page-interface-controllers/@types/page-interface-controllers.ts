import { NextFunction, Request, Response } from 'express';

export interface IPageInterfaceControllers {
	getDatasPageInterfaceDB(req: Request, res: Response, next:NextFunction): Promise<void>;
}
