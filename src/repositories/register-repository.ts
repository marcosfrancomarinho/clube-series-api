import IRegisterRepository from '../interfaces/register-repository';
import User from '../model/User';

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
