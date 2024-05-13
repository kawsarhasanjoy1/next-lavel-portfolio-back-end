import { Schema, model } from "mongoose";
import { TBlog } from "./interface";

const blogSchema = new Schema<TBlog>(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
   description: {type: String, required: true}
  },
  { timestamps: true }
);

const BlogModal = model<TBlog>("blog", blogSchema);

export default BlogModal;
