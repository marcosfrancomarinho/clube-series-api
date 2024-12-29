
interface IRegisterRepository {
	queryCreateUser(
		name: string,
		email: string,
		password: string,
	): Promise<void>;
}
export default IRegisterRepository;
