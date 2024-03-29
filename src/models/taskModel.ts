// src/models/taskModel.ts

import mongoose from "mongoose";

// Define the schema interface
export interface ITodoItem extends mongoose.Document {
  item: string;
  completed: boolean;
}

// Define the schema
const todoSchema = new mongoose.Schema({
  item: String,
  completed: { type: Boolean, default: false },
}, { timestamps: true });

// Define the model
export const Todo = mongoose.model<ITodoItem>("Todo", todoSchema, "todolist");
