import Router from "express";
import { loginRouter } from "./login.router";
import { registerRouter } from "./register.router";
import { rootRouter } from "./root.router";
import { welcomeRouter } from "./welcome.router";
const routers = Router();

routers.use("/signup", registerRouter);
routers.use("/login", loginRouter);
routers.use("/welcome", welcomeRouter);
routers.use("/", rootRouter);

export { routers };
