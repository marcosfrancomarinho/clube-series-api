import express from "express";
import { routers } from "./routers/routers";
import cors from "cors";
import { corsOptions } from "./config/cors.options";
import { responseError } from "./config/instances";
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(routers);
app.use(responseError.error);

export { app };
