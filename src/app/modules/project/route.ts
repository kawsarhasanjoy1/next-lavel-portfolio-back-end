import { Router } from "express";
import { ProjectController } from "./control";

const projectRouter = Router();

projectRouter.post('/create-project', ProjectController.createProject)
projectRouter.get('/all-project', ProjectController.getProject)
projectRouter.delete('/delete-project/:id', ProjectController.deleteProject)


export default projectRouter