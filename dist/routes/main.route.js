"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_controller_1 = __importDefault(require("../controllers/main.controller"));
const MAIN_ROUTE = (0, express_1.Router)();
MAIN_ROUTE.get('/', main_controller_1.default.welcome);
exports.default = MAIN_ROUTE;
