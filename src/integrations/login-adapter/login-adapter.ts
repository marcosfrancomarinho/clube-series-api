import User from '../../model/user/user';
import { ILoginAdapter } from './@types/login-adapter';
import { IDbResponse } from './@types/login-adapter';

class LoginAdapter implements ILoginAdapter {
	constructor(private user: typeof User) {}
	public querySelectUser = async (
		email: string,
		retrievedData: string[],
	): Promise<IDbResponse | null> => {
		const response = await this.user.findOne({
			attributes: retrievedData,
			where: {
				email: email,
			},
			raw: true,
		});
		return response as IDbResponse | null;
	};
}
export default LoginAdapter;
