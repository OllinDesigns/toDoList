import { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import { ITodoItem } from "../dtos/IToDoItem";
import { Todo } from "../dtos/Todo";

const urlencodedParser = bodyParser.urlencoded({ extended: false });

export default function toDoController(app: Express) {
  app.get("/todo", async (req: Request, res: Response) => {
    try {
      const data = await Todo.find({});
      res.json(data);
    } catch (err) {
      console.error("Error retrieving data from MongoDB:", err);
      res.status(500).send("Internal Server Error");
    }
  });

  app.post("/todo", urlencodedParser, async (req: Request, res: Response) => {
    try {
      if (!req.body.item) {
        return res.status(400).send("Item field is required");
      }

      const newTodo = new Todo({
        item: req.body.item,
        completed: false,
      });

      await newTodo.save();
      console.log("New item added:", req.body.item);

      const data = await Todo.find({});
      res.json(data);
    } catch (err) {
      console.error("Error saving data to MongoDB:", err);
      res.status(500).send("Internal Server Error");
    }
  });

  app.put("/todo/:id", async (req: Request, res: Response) => {
    try {
      const { id: taskId } = req.params;
      const { completed } = req.body as ITodoItem;

      console.log("Completed", completed);

      const updatedTask = await Todo.findByIdAndUpdate(
        taskId,
        { completed: completed },
        { new: true }
      );

      if (!updatedTask) {
        res.status(404).json({ error: "Task not found" });
      } else {
        res.json(updatedTask);
      }
    } catch (err) {
      console.error("Error updating task in MongoDB:", err);
      res.status(500).send("Internal Server Error");
    }
  });

  app.delete("/todo/:id", async (req: Request, res: Response) => {
    try {
      const { id: taskId } = req.params;

      const deletedTask = await Todo.findByIdAndDelete(taskId);

      if (!deletedTask) {
        res.status(404).json({ error: "Task not found" });
      } else {
        console.log("Deleted Item", deletedTask.item);
        res.json(deletedTask);
      }
    } catch (err) {
      console.error("Error deleting task in MongoDB:", err);
      res.status(500).send("Internal Server Error");
    }
  });
}
