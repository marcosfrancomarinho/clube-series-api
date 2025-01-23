import { Response, Request, NextFunction } from "express";

export interface ILoginControllers {
	loginUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
