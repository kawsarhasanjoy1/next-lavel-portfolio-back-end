"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const projectSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    liveLink: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const ProjectModal = (0, mongoose_1.model)("Project", projectSchema);
exports.default = ProjectModal;
