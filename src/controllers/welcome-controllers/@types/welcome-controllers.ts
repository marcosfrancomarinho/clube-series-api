import { Response, Request } from 'express';

interface IWelcomeControllers {
	welcomeUser(req: Request, res: Response): Promise<void>;
}

export default IWelcomeControllers;
