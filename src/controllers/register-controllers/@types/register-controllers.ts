import { Response, Request, NextFunction } from 'express';

interface IRegisterControllers {
	registerUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export default IRegisterControllers;
