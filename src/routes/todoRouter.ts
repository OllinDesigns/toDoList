import express from 'express';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../controllers/toDoController';

const router = express.Router();

router.get("/todo/", getAllTodos);
router.post("/todo/", createTodo);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

export default router;
