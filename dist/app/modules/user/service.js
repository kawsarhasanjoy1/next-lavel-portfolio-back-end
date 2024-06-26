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
exports.userService = void 0;
const modal_1 = __importDefault(require("./modal"));
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = payload;
    const isExistsUser = yield modal_1.default.findOne({ email });
    if (isExistsUser) {
        throw new Error("user already exists..!");
    }
    const result = yield modal_1.default.create(payload);
    return result;
});
const findDataFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.find();
    return result;
});
const findSingleDataFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.findById(id);
    return result;
});
const upUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield modal_1.default.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = modal_1.default.findByIdAndDelete(id);
    return result;
});
exports.userService = {
    createUser,
    findDataFromDb,
    findSingleDataFromDb,
    upUser,
    deleteUser,
};
