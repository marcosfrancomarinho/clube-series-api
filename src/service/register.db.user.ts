import User from '../model/User';
import { encryptPassword } from '../util/crypt.password';
import { TypesResponseDbRegister } from '../types/response.db.types';

const registerUserDb = async (
	name: string,
	email: string,
	password: string,
): Promise<TypesResponseDbRegister> => {
	const messageSuccess: TypesResponseDbRegister = {
		ok: true,
		status: 'usuario cadastrado com sucesso',
	};
	try {
		const encryptedPassword: string = await encryptPassword(password);
		await User.create({
			name: name,
			email: email,
			password: encryptedPassword,
		});
		return messageSuccess;
	} catch (error) {
		throw error;
	}
};
export default registerUserDb;
