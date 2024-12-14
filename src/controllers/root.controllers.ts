import { Response, Request } from 'express';
import TypesControllerRoot from '../types/root.controllers.types';

class ControllerRoot implements TypesControllerRoot {
	accessAllowed(req: Request, res: Response): void {
		res.json({ isLogin: true, status: 'acesso permitido' } as {
			isLogin: boolean;
			status: string;
		});
	}
}
export default ControllerRoot;
