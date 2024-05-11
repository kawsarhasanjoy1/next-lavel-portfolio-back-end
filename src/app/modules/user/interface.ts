import { USER_ROLE } from "../constance";


export interface TUser {
  username: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

export type TUserRole = keyof typeof USER_ROLE;
