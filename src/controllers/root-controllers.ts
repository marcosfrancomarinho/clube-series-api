import { Response, Request } from 'express';
import IRootControllers from '../interfaces/root-controllers';

class RootControllres implements IRootControllers {
	public accessAllowed = (req: Request, res: Response): void => {
		res.json({ isLogin: true, status: 'acesso permitido' } as {
			isLogin: boolean;
			status: string;
		});
	};
}
export default RootControllres;

//CONTROLLER  DE TESTE
