import { Request, Response } from 'express';
import IWelcomeControllers from './@types/welcome-controllers';

class WelcomeControllers implements IWelcomeControllers {
	public welcomeUser = async (req: Request, res: Response): Promise<void> => {
		res.status(200).type('.html').send('<h1>Ola seja bem vindo</h1>');
	};
}
export default WelcomeControllers;
