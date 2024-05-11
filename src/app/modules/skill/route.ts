import { Router } from "express";
import { skillController } from "./controll";

const skillRouter = Router();

skillRouter.post("/create-skill", skillController.createSkill);
skillRouter.get("/get-all-skill", skillController.getSkill);
skillRouter.delete("/delete-skill/:id", skillController.deleteSkill);

export default skillRouter;
