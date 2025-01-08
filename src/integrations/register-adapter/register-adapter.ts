import User from '../../model/user/user';
import { IRegisterAdapter } from './@types/register-adapter';

class RegisterAdapter implements IRegisterAdapter {
	public queryCreateUser = async (
		name: string,
		email: string,
		password: string,
	): Promise<void> => {
		await User.create({
			name,
			email,
			password,
		});
	};
}
export default RegisterAdapter;
