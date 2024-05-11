import { TSkill } from "./interface";
import { SkillModal } from "./modal";

const createSkill = async (payload: Partial<TSkill>) => {
  const result = await SkillModal.create(payload);
  return result;
};
const getSkill = async () => {
  const result = await SkillModal.find();
  return result;
};
const deleteSkill = async (id: string) => {
  const result = await SkillModal.findByIdAndDelete(id);
  return result;
};

export const skillService = {
  createSkill,
  getSkill,
  deleteSkill,
};
