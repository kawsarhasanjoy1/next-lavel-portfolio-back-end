import { NextFunction, Request, Response } from "express";
import { userService } from "./service";
import catchAsync from "../../utils/catchAsync";
import sentResponse from "../../utils/sentResponse";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await userService.createUser(data);
    const user = {
      _id: result?._id,
      username: result.username,
      email: result.email,
      role: result.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    sentResponse(res, {
      statusCode: 201,
      message: "User created successful",
      data: user,
    });
  }
);
const findDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await userService.findDataFromDb();
    sentResponse(res, {
      statusCode: 201,
      message: "User retreive successful",
      data: result,
    });
  }
);
const findSingleDataFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.userId;
    const result = await userService.findSingleDataFromDb(id);
    sentResponse(res, {
      statusCode: 201,
      message: "Single user retreive successful",
      data: result,
    });
  }
);
const upUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.userId;
    const user = req.body;
    const result = await userService.upUser(id, user);
    sentResponse(res, {
      statusCode: 201,
      message: "User updated successful",
      data: result,
    });
  }
);
const deleteUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.userId;
    const result = await userService.deleteUser(id);
    sentResponse(res, {
      statusCode: 201,
      message: "User deleted successful",
      data: result,
    });
  }
);

export const userController = {
  createUser,
  findDataFromDb,
  findSingleDataFromDb,
  upUser,
  deleteUser,
};
