import User from '../model/User';
import { TypesResponseDbLogin } from '../types/response.db.types';
import { passwordValidation } from '../util/crypt.password';

const loginUserDb = async (
	email: string,
	password: string,
): Promise<TypesResponseDbLogin> => {
	const messageError: string = 'Email ou senha inválida';
	const messageSuccess: TypesResponseDbLogin = {
		ok: true,
		status: 'usuario logado com sucesso',
		token: '',
	};
	try {
		const response = await User.findOne({
			attributes: ['id', 'email', 'password'],
			where: {
				email: email,
			},
		});
		if (!response) throw new Error(messageError);
		const checkPassword: boolean = await passwordValidation(
			password,
			response.password,
		);
		if (!checkPassword) throw new Error(messageError);
		return messageSuccess;
	} catch (error) {
		throw error;
	}
};

export default loginUserDb;
