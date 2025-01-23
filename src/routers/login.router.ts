import Router from "express";
import { loginControllers, verifyLogin } from "../config/instances";

const loginRouter = Router();

loginRouter.post("/", verifyLogin.verifyDatasBodyUserLogin, loginControllers.loginUser);

export { loginRouter };
