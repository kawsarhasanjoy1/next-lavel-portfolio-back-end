"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillController = void 0;
const service_1 = require("./service");
const sentResponse_1 = __importDefault(require("../../utils/sentResponse"));
const createSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const skill = req.body;
    console.log(skill);
    const result = yield service_1.skillService.createSkill(skill);
    (0, sentResponse_1.default)(res, {
        statusCode: 201,
        message: "Skill created successful",
        data: result,
    });
});
const getSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.skillService.getSkill();
    (0, sentResponse_1.default)(res, {
        statusCode: 200,
        message: "Skill fetched successful",
        data: result,
    });
});
const deleteSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_1.skillService.deleteSkill(id);
    (0, sentResponse_1.default)(res, {
        statusCode: 200,
        message: "Skill deleted successful",
        data: result,
    });
});
exports.skillController = {
    createSkill,
    getSkill,
    deleteSkill,
};
