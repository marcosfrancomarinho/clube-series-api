import Router from "express";
import { welcomeControllers } from "../config/instances";

const welcomeRouter = Router();

welcomeRouter.get("/", welcomeControllers.welcomeUser);

export { welcomeRouter };
