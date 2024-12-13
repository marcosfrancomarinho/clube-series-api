import express from 'express';
import router from './routers/main';
import cors, { CorsOptions } from 'cors';

const configCors: CorsOptions = {
	methods: ['POST'],
	origin: '*',
	allowedHeaders: ['Authorization', 'Content-Type'],
	exposedHeaders: ['Authorization'],
};
const app = express();
app.use(cors(configCors));
app.use(express.json());
app.use(router);

export default app;
