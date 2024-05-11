import { Request, Response } from "express";
import sentResponse from "../../utils/sentResponse";
import { BlogService } from "./service";


const createBlog = async (req: Request, res: Response) => {
  const blog = req.body;
  console.log(BlogService)
  const result = await BlogService.createBlog(blog)
  sentResponse(res, {
    statusCode: 201,
    message: "Blog created successful",
    data: result,
  });
};
const getBlog = async (req: Request, res: Response) => {
  const result = await BlogService.getBlog();
  sentResponse(res, {
    statusCode: 200,
    message: "Blog fetched successful",
    data: result,
  });
};
const deleteBlog = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BlogService.deleteBlog(id);
  sentResponse(res, {
    statusCode: 200,
    message: "Blog deleted successful",
    data: result,
  });
};

export const BlogController = {
  createBlog,
  getBlog,
  deleteBlog,
};
