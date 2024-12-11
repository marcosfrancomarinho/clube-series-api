import { Response, Request } from 'express';

interface TypesControllersLogin {
	loginUser(req: Request, res: Response): Promise<void>;
}
export default TypesControllersLogin;
