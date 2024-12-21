interface TypeVerifyDatasUser {
	nameUser(name: string): void;
	passwordUser(password: string): void;
	emailUser(email: string): void;
	loginUser(email: string, password: string): void;
	registerUser(name: string, email: string, password: string): void;
}
export default TypeVerifyDatasUser;
