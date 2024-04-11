import express from 'express';
import { getAllTodos, createTodo, updateTodo, deleteTodo } from '../controllers/toDoController';
import { createUser } from '../controllers/userController'

const router = express.Router();

// http://localhost:3000/todo/
router.get("/todo/", getAllTodos);
router.post("/todo/", createTodo);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);

router.post(`/signup`, createUser)

export default router;
