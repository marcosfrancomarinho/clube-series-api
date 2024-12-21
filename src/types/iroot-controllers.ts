import { Response, Request } from 'express';

interface IRootControllers {
	accessAllowed(req: Request, res: Response):void;
}
export default IRootControllers;
