import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
	methods: ["POST", "GET"],
	origin: "*",
	allowedHeaders: ["Authorization", "Content-Type"],
	exposedHeaders: ["Authorization"],
};
