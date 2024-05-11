import { Schema, model } from "mongoose";
import { TProject } from "./interface";

const projectSchema = new Schema<TProject>(
  {
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
  },
  { timestamps: true }
);

const ProjectModal = model<TProject>("Project", projectSchema);

export default ProjectModal;
