import { Response, Request } from 'express';

interface ILoginControllers {
	loginUser(req: Request, res: Response): Promise<void>;
}
export default ILoginControllers;
