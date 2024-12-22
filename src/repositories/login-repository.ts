import { ILoginRepository, IDbResponse } from '../interfaces/login-repository';
import User from '../model/User';

class LoginRepository implements ILoginRepository {
	private user: typeof User;
	constructor(user: typeof User) {
		this.user = user;
	}
	public querySelectUser= async (
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
export default LoginRepository;

