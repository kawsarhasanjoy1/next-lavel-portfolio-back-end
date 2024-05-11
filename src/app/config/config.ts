import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
  bcrypt: process.env.BCRYPT,
  jwt_token: process.env.JWT_TOKEN,
};
