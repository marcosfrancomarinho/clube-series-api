import { Request } from 'express';

abstract class RequestModel {
	protected getDatasBodyLogin(req: Request) {
		return req.body as {
			email: string;
			password: string;
		};
	}
	protected getDatasBodyRegister(req: Request) {
		return req.body as {
			email: string;
			password: string;
			name: string;
		};
	}
	protected messageError(error: unknown) {
		return {
			error: (error as Error).message,
		};
	}
}
export default RequestModel;
