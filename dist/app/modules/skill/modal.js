"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillModal = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true, unique: true },
});
exports.SkillModal = (0, mongoose_1.model)("skill", skillSchema);
