import { IRegisterAdapter } from "../@types/integrations/register.adapter";
import { User } from "../model/user.model";

export class RegisterAdapter implements IRegisterAdapter {
	public queryCreateUser = async (name: string, email: string, password: string): Promise<void> => {
		await User.create({
			name,
			email,
			password,
		});
	};
}
