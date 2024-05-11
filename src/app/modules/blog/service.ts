
import { TBlog } from "./interface";
import BlogModal from "./modal";


const createBlog = async (payload: Partial<TBlog>) => {
  const result = await BlogModal.create(payload);
  return result;
};
const getBlog = async () => {
  const result = await BlogModal.find();
  return result;
};
const deleteBlog = async (id: string) => {
  const result = await BlogModal.findByIdAndDelete(id);
  return result;
};

export const BlogService = {
  createBlog,
  getBlog,
  deleteBlog,
};
