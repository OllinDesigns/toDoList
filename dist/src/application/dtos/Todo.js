"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const toDoSchema = new mongoose_1.default.Schema({
    item: String,
    completed: { type: Boolean, default: false },
});
exports.Todo = mongoose_1.default.model("Todo", toDoSchema, "todolist-db");
