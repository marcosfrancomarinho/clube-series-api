import express from 'express';
import router from './routers/main';
import cors from 'cors';
const app = express();

app.use(
	cors({
		methods: ['POST', 'GET'],
		origin: ['https://cubo-serie.vercel.app', 'http://localhost:5173'],
		allowedHeaders: ['Authorization', 'Content-Type'],
		exposedHeaders: ['Authorization'],
	}),
);
app.use(express.json());
app.use(router);

export default app;
