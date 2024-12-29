import { Response, Request } from 'express';

interface IRegisterControllers {
	registerUser(req: Request, res: Response): Promise<void>;
}
export default IRegisterControllers;
