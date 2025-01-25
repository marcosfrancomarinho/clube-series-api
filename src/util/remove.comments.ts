export function prepare(comand: string): string {
	return comand.replace("--sql", "");
}
