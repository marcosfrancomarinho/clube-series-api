import { Response, Request } from 'express';

interface TypesControllerSiginUp {
	siginUpUser(req: Request, res: Response): Promise<void>;
}
export default TypesControllerSiginUp;
