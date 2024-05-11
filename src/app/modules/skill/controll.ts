import { Request, Response } from "express";
import { skillService } from "./service";
import sentResponse from "../../utils/sentResponse";

const createSkill = async (req: Request, res: Response) => {
  const skill = req.body;
  console.log(skill)
  const result = await skillService.createSkill(skill);
  sentResponse(res, {
    statusCode: 201,
    message: "Skill created successful",
    data: result,
  });
};
const getSkill = async (req: Request, res: Response) => {
  const result = await skillService.getSkill();
  sentResponse(res, {
    statusCode: 200,
    message: "Skill fetched successful",
    data: result,
  });
};
const deleteSkill = async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await skillService.deleteSkill(id);
  sentResponse(res, {
    statusCode: 200,
    message: "Skill deleted successful",
    data: result,
  });
};

export const skillController = {
  createSkill,
  getSkill,
  deleteSkill,
};
