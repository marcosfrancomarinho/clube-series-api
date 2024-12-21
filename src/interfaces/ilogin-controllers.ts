import { Response, Request } from 'express';

interface IControllersLogin {
	loginUser(req: Request, res: Response): Promise<void>;
}
export default IControllersLogin;
