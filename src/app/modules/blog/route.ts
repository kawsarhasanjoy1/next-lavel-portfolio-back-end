import { Router } from "express";
import { BlogController } from "./controll";

const blogRouter = Router();

blogRouter.post("/create-blog", BlogController.createBlog);
blogRouter.get("/all-blog", BlogController.getBlog);
blogRouter.delete("/delete-blog/:id", BlogController.deleteBlog);

export default blogRouter;
