import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
	methods: ["POST", "GET"],
	origin: ["https://cubo-serie.vercel.app", "http://localhost:5173"],
	allowedHeaders: ["Authorization", "Content-Type"],
	exposedHeaders: ["Authorization"],
};
