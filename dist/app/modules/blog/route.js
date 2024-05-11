"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controll_1 = require("./controll");
const blogRouter = (0, express_1.Router)();
blogRouter.post("/create-blog", controll_1.BlogController.createBlog);
blogRouter.get("/all-blog", controll_1.BlogController.getBlog);
blogRouter.delete("/delete-blog/:id", controll_1.BlogController.deleteBlog);
exports.default = blogRouter;
