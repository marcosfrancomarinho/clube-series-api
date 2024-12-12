import { Response, Request } from 'express';

function testeUserAuthenticate(req: Request, res: Response): void {
	console.log(res.locals.token);
	res.json({ msg: 'teste ok - acesso permitido' });
}
export default testeUserAuthenticate;
