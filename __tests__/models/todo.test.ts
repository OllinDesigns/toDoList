import { Todo } from "../../src/models/taskModel";

describe("Testing the Todo Model", () => {
  it("should create a new todo item with default 'completed' value", () => {
    const newTodoData = {
      item: "New Todo Item",
    };
    const newTodo = new Todo(newTodoData);

    expect(newTodo.completed).toBe(false);
  });

  it("should set the 'completed' field to false if not provided as it is specified in the Todo model", () => {
    const newTodoData = {
      item: "Todo Item Without Completed",
    };

    const newTodo = new Todo(newTodoData);

    expect(newTodo.completed).toBe(false);
  });
});

