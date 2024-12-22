import { CorsOptions } from 'cors';

export type Icors = (
	options: CorsOptions,
) => ReturnType<(options: CorsOptions) => any>;

export interface ICorsManager {
	corsConfig(): ReturnType<(options: CorsOptions) => any>;
}
