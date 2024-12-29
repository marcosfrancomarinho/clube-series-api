import express from 'express';
import router from './routers/main';
import cors from 'cors';
import { optionCors } from './config/cors-options';
const app = express();

app.use(cors(optionCors));
app.use(express.json());
app.use(router);

export default app;
