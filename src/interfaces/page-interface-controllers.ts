import { Request, Response } from 'express';

export interface IPageInterfaceControllers {
	getDatasPageInterfaceDB(req: Request, res: Response): Promise<void>;
}
