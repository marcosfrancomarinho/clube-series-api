import { Response, Request, NextFunction } from "express";

export type IResponseDb = { ok: boolean; status: string; id: number; email: string };

export interface IRegisterControllers {
	registerUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
