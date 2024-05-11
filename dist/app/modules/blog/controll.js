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
exports.BlogController = void 0;
const sentResponse_1 = __importDefault(require("../../utils/sentResponse"));
const service_1 = require("./service");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = req.body;
    console.log(service_1.BlogService);
    const result = yield service_1.BlogService.createBlog(blog);
    (0, sentResponse_1.default)(res, {
        statusCode: 201,
        message: "Blog created successful",
        data: result,
    });
});
const getBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.BlogService.getBlog();
    (0, sentResponse_1.default)(res, {
        statusCode: 200,
        message: "Blog fetched successful",
        data: result,
    });
});
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield service_1.BlogService.deleteBlog(id);
    (0, sentResponse_1.default)(res, {
        statusCode: 200,
        message: "Blog deleted successful",
        data: result,
    });
});
exports.BlogController = {
    createBlog,
    getBlog,
    deleteBlog,
};
