"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controll_1 = require("./controll");
const skillRouter = (0, express_1.Router)();
skillRouter.post("/create-skill", controll_1.skillController.createSkill);
skillRouter.get("/get-all-skill", controll_1.skillController.getSkill);
skillRouter.delete("/delete-skill/:id", controll_1.skillController.deleteSkill);
exports.default = skillRouter;
