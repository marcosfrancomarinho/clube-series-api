import Router from "express";
import { registerControllers, verifyRegister } from "../config/instances";

const registerRouter = Router();

registerRouter.post("/", verifyRegister.verifyDatasBodyUserRegister, registerControllers.registerUser);

export { registerRouter };
