"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const userRouter = (0, express_1.Router)();
userRouter.post("/auth/register", controller_1.userController.createUser);
userRouter.get("/auth", 
//   auth(USER_ROLE.admin),
controller_1.userController.findDataFromDb);
userRouter.get("/auth/:userId", controller_1.userController.findSingleDataFromDb);
userRouter.patch("/auth/:userId", controller_1.userController.upUser);
userRouter.delete("/auth/:userId", controller_1.userController.deleteUser);
exports.default = userRouter;
