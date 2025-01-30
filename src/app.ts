import express from "express";
import { routers } from "./routers/routers";
import cors from "cors";
import { corsOptions } from "./config/cors.options";
import { responseError } from "./config/instances";

const port: number = Number(process.env.PORT ?? "3000");
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(routers);
app.use(responseError.error);

app.listen(port, () => console.log(`server running on http://localhost:${port}`));
