import { Request, Response } from 'express';

export interface IPageInterfaceControllers {
	getDatasPageInterface(req: Request, res: Response): Promise<void>;
}
