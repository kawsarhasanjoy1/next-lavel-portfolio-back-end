import { Request, Response } from "express";
import sentResponse from "../../utils/sentResponse";
import { ProjectService } from "./service";

const createProject = async (req: Request, res: Response) => {
  const Project = req.body;
  console.log(Project)
  const result = await ProjectService.createProject(Project);
  sentResponse(res, {
    statusCode: 201,
    message: "Project created successful",
    data: result,
  });
};
const getProject = async (req: Request, res: Response) => {
  const result = await ProjectService.getProject();
  sentResponse(res, {
    statusCode: 200,
    message: "Project fetched successful",
    data: result,
  });
};
const deleteProject = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ProjectService.deleteProject(id);
  sentResponse(res, {
    statusCode: 200,
    message: "Project deleted successful",
    data: result,
  });
};

export const ProjectController = {
  createProject,
  getProject,
  deleteProject,
};
