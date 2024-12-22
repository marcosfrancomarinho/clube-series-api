import express from 'express';
import router from './routers/main';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(router);
app.use(
	cors({
		methods: ['POST', 'GET'],
		origin: '*',
		allowedHeaders: ['Authorization', 'Content-Type'],
		exposedHeaders: ['Authorization'],
	}),
);

export default app;
