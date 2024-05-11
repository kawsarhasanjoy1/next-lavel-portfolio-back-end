import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config/config";
import { TUser } from "./interface";


const userSchema = new Schema<TUser>(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value: string) {
          const validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return validator.test(value);
        },
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
      validate: {
        validator: function (value: string) {
          const strongPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,}$/;
          return strongPassword.test(value);
        },
        message:
          "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@#$%^&*!)",
      },
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config));
  next();
});

const User = model<TUser>("user", userSchema);
export default User;
