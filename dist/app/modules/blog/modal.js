"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    what: {
        type: String,
        required: true,
    },
    how: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const BlogModal = (0, mongoose_1.model)("blog", blogSchema);
exports.default = BlogModal;
