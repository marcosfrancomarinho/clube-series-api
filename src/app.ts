import express from 'express';
import router from './routers/main';
import cors from 'cors';
import { corsOptions } from './config/cors-options';
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

export default app;
