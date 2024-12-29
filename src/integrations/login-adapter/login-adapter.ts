import User from '../../model/User/User';
import { ILoginAdapter } from './@types/login-adapter';
import { IDbResponse } from './@types/login-adapter';

class LoginAdapter implements ILoginAdapter {
	private user: typeof User;
	constructor(user: typeof User) {
		this.user = user;
	}
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
