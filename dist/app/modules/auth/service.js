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
exports.authService = void 0;
const config_1 = __importDefault(require("../../config/config"));
const modal_1 = __importDefault(require("../user/modal"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const user = yield modal_1.default.findOne({ email }).select("+password");
    if (!user) {
        throw new Error("Din not match user");
    }
    const hashPassword = user === null || user === void 0 ? void 0 : user.password;
    const isExistsPassword = yield bcrypt_1.default.compare(password, hashPassword);
    if (!isExistsPassword) {
        throw new Error("didn't match password");
    }
    const userPayload = {
        id: user === null || user === void 0 ? void 0 : user._id,
        name: user === null || user === void 0 ? void 0 : user.username,
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role,
    };
    const token = jsonwebtoken_1.default.sign(userPayload, config_1.default.jwt_token, {
        expiresIn: "7d",
    });
    return {
        user,
        token
    };
});
exports.authService = {
    loginUser,
};
