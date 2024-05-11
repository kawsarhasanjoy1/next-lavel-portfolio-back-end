import { TProject } from "./interface";
import ProjectModal from "./modal";


const createProject = async (payload: Partial<TProject>) => {
  const result = await ProjectModal.create(payload);
  return result;
};
const getProject = async () => {
  const result = await ProjectModal.find();
  return result;
};
const deleteProject = async (id: string) => {
  const result = await ProjectModal.findByIdAndDelete(id);
  return result;
};

export const ProjectService = {
  createProject,
  getProject,
  deleteProject,
};
