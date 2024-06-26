import { Router } from "express";
import skillRouter from "../modules/skill/route";
import projectRouter from "../modules/project/route";
import userRouter from "../modules/user/route";
import authRouter from "../modules/auth/route";
import blogRouter from "../modules/blog/route";

const router = Router();
const moduleRoute = [
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/user",
    route: authRouter,
  },
  {
    path: "/skill",
    route: skillRouter,
  },
  {
    path: "/project",
    route: projectRouter,
  },
  {
    path: "/blog",
    route: blogRouter,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
