import { Schema, model } from "mongoose";
import { TSkill } from "./interface";

const skillSchema = new Schema<TSkill>({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
});

export const SkillModal = model<TSkill>("skill", skillSchema);
