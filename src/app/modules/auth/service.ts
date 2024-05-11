import config from "../../config/config";
import User from "../user/modal";
import { TLogin } from "./interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUser = async (payload: TLogin) => {
  const { email, password } = payload;
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Din not match user");
  }
  const hashPassword = user?.password;
  const isExistsPassword = await bcrypt.compare(password, hashPassword);
  if (!isExistsPassword) {
    throw new Error("didn't match password");
  }

  const userPayload = {
    id: user?._id,
    name: user?.username,
    email: user?.email,
    role: user?.role,
  };
  const token = jwt.sign(userPayload, config.jwt_token as string, {
    expiresIn: "7d",
  });
  return {
    token,
  };
};

export const authService = {
  loginUser,
};
