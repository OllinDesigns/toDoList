"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskListUseCase_1 = require("./src/core/domain/use-cases/taskListUseCase");
const TaskRepository_1 = require("./src/infrastructure/repositories/TaskRepository");
const app = (0, express_1.default)();
const taskRepository = new TaskRepository_1.TaskRepository();
const taskListUseCase = new taskListUseCase_1.TaskListUseCase(taskRepository);
app.get('/tasks', (req, res) => {
    const tasks = taskListUseCase.getTasks();
    res.json(tasks);
    console.log(tasks);
});
app.get('/', (req, res) => {
    res.send('Hello, Gurrus!');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
