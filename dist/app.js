"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const toDoController_1 = __importDefault(require("./src/application/controllers/toDoController"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.use(express_1.default.static('public'));
(0, toDoController_1.default)(app);
app.listen(3000, () => {
    console.log('Gurrus says hello from port 3000');
});
