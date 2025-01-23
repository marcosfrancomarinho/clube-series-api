import { Response, Request } from "express";

export interface IWelcomeControllers {
	welcomeUser(req: Request, res: Response): Promise<void>;
}

