import User from '../../model/User/User';
import IRegisterRepository from './@types/register-repository';

class RegisterRepository implements IRegisterRepository {
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
export default RegisterRepository;
