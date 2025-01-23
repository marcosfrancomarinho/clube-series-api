import { Response, Request, NextFunction } from "express";

export interface IRegisterControllers {
	registerUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export interface IResponseDb {
	ok: boolean;
	status: string;
	id: number;
	email: string;
}
