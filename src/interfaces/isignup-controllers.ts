import { Response, Request } from 'express';

interface ISignupControllers {
	siginUpUser(req: Request, res: Response): Promise<void>;
}
export default ISignupControllers;
