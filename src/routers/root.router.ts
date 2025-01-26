import Router from "express";
import { authenticateUser, pageInterfaceControllers } from "../config/instances";

const rootRouter = Router();

rootRouter.post("/", authenticateUser.authenticationTokenUser, pageInterfaceControllers.getDatasPageInterfaceDB);

rootRouter.get("/", pageInterfaceControllers.getDatasPageInterfaceDB);

export { rootRouter };
