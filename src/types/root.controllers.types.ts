import { Response, Request } from 'express';

interface TypesControllerRoot {
	accessAllowed(req: Request, res: Response):void;
}
export default TypesControllerRoot;
