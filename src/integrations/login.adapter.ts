import { User } from "../model/user.model";
import { ILoginAdapter } from "../@types/login.adapter";
import { IDbResponse } from "../@types/login.adapter";

export class LoginAdapter implements ILoginAdapter {
	public querySelectUser = async (email: string, retrievedData: string[]): Promise<IDbResponse | null> => {
		const response = await User.findOne({
			attributes: retrievedData,
			where: {
				email: email,
			},
			raw: true,
		});
		return response as IDbResponse | null;
	};
}
