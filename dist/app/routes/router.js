"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = __importDefault(require("../modules/skill/route"));
const route_2 = __importDefault(require("../modules/project/route"));
const route_3 = __importDefault(require("../modules/user/route"));
const route_4 = __importDefault(require("../modules/auth/route"));
const route_5 = __importDefault(require("../modules/blog/route"));
const router = (0, express_1.Router)();
const moduleRoute = [
    {
        path: "/user",
        route: route_3.default,
    },
    {
        path: "/user",
        route: route_4.default,
    },
    {
        path: "/skill",
        route: route_1.default,
    },
    {
        path: "/project",
        route: route_2.default,
    },
    {
        path: "/blog",
        route: route_5.default,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
