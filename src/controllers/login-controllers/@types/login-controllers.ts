import  {Response, Request, NextFunction } from 'express';

interface ILoginControllers {
	loginUser(req: Request, res: Response, next:NextFunction): Promise<void>;
}
export default ILoginControllers;
