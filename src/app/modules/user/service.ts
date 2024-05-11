import { TUser } from "./interface";
import User from "./modal";

const createUser = async (payload: TUser) => {
  const { email } = payload;
  const isExistsUser = await User.findOne({ email });
  if (isExistsUser) {
    throw new Error("user already exists..!");
  }
  const result = await User.create(payload);
  return result;
};

const findDataFromDb = async () => {
  const result = await User.find();
  return result;
};

const findSingleDataFromDb = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const upUser = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteUser = async (id: string) => {
  const result = User.findByIdAndDelete(id);
  return result;
};

export const userService = {
  createUser,
  findDataFromDb,
  findSingleDataFromDb,
  upUser,
  deleteUser,
};
