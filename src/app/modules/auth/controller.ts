import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { authService } from "./service";
import sentResponse from "../../utils/sentResponse";
import httpStatus from "http-status";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await authService.loginUser(user);

    sentResponse(res, {
      statusCode: 201,
      message: "User login successful",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.json({
      message: err?.message,
    });
  }
});

export const authController = {
  loginUser,
};
