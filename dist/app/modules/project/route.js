"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const control_1 = require("./control");
const projectRouter = (0, express_1.Router)();
projectRouter.post('/create-project', control_1.ProjectController.createProject);
projectRouter.get('/all-project', control_1.ProjectController.getProject);
projectRouter.delete('/delete-project/:id', control_1.ProjectController.deleteProject);
exports.default = projectRouter;
