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
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const Todo_1 = require("../dtos/Todo");
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
mongoose_1.default
    .connect("mongodb+srv://ollinDesigns:claveParaAtlas@cluster0.1b2ylxi.mongodb.net/todolist-db?retryWrites=true&w=majority")
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
function toDoController(app) {
    app.get("/todo", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield Todo_1.Todo.find({});
            res.json(data);
        }
        catch (err) {
            console.error("Error retrieving data from MongoDB:", err);
            res.status(500).send("Internal Server Error");
        }
    }));
    app.post("/todo", urlencodedParser, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const newTodo = new Todo_1.Todo({
                item: req.body.item,
                completed: false,
            });
            yield newTodo.save();
            console.log("New item added:", req.body.item);
            const data = yield Todo_1.Todo.find({});
            res.json(data);
        }
        catch (err) {
            console.error("Error saving data to MongoDB:", err);
            res.status(500).send("Internal Server Error");
        }
    }));
    app.put("/todo/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { id: taskId } = req.params;
            const { completed } = req.body;
            console.log("Completed", completed);
            const updatedTask = yield Todo_1.Todo.findByIdAndUpdate(taskId, { completed: completed }, { new: true });
            if (!updatedTask) {
                res.status(404).json({ error: "Task not found" });
            }
            else {
                res.json(updatedTask);
            }
        }
        catch (err) {
            console.error("Error updating task in MongoDB:", err);
            res.status(500).send("Internal Server Error");
        }
    }));
    app.delete("/todo/:id", (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { id: taskId } = req.params;
            const deletedTask = yield Todo_1.Todo.findByIdAndDelete(taskId);
            if (!deletedTask) {
                res.status(404).json({ error: "Task not found" });
            }
            else {
                console.log("Deleted Item", deletedTask.item);
                res.json(deletedTask);
            }
        }
        catch (err) {
            console.error("Error deleting task in MongoDB:", err);
            res.status(500).send("Internal Server Error");
        }
    }));
}
exports.default = toDoController;
