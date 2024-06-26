"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router_1 = __importDefault(require("./app/routes/router"));
const cors_1 = __importDefault(require("cors"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const app = express();
app.use((0, cors_1.default)());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api/v1", router_1.default);
app.use(notFound_1.default);
exports.default = app;
