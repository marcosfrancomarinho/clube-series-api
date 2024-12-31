import User from '../../model/user/user';
import { IRegisterAdapter } from './@types/register-adapter';

class RegisterAdapter implements IRegisterAdapter {
	constructor(private user: typeof User) {}
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
