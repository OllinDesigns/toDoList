// This is the Todo model

import mongoose from "mongoose";
import { ITodoItem } from "./IToDoItem";

const toDoSchema = new mongoose.Schema({
  item: String,
  completed: { type: Boolean, default: false },
});

export const Todo = mongoose.model<ITodoItem>(
  "Todo",
  toDoSchema,
  "todolist-db"
);
