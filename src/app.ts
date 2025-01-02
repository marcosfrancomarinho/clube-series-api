import express from 'express';
import routerMain from './routers/main-router';
import cors from 'cors';
import { corsOptions } from './config/cors-options';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(routerMain);

export default app;
