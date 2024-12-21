import { Response, Request } from 'express';

interface IRegisterControllers {
	siginUpUser(req: Request, res: Response): Promise<void>;
}
export default IRegisterControllers;
