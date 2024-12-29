import User from '../../model/User/User';
import { IRegisterAdapter } from './@types/register-adapter';

class RegisterAdapter implements IRegisterAdapter {
	private user: typeof User;
	constructor(user: typeof User) {
		this.user = user;
	}
	public queryCreateUser = async (
		name: string,
		email: string,
		password: string,
	): Promise<void> => {
		await this.user.create({
			name,
			email,
			password,
		});
	};
}
export default RegisterAdapter;