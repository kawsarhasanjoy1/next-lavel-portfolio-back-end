import { Router } from "express";
import { userController } from "./controller";


const userRouter = Router();
userRouter.post(
  "/register",
  userController.createUser
);
userRouter.get(
  "/auth",
//   auth(USER_ROLE.admin),
  userController.findDataFromDb
);
userRouter.get("/auth/:userId", userController.findSingleDataFromDb);
userRouter.patch("/auth/:userId", userController.upUser);
userRouter.delete("/auth/:userId", userController.deleteUser);

export default userRouter;
