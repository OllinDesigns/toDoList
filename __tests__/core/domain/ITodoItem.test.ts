import { ITodoItem } from "../../../src/application/dtos/IToDoItem";
import mongoose from "mongoose";

describe("The ItodoItem interface has the following data types: id = mongoose.Types.ObjectId, item = string and completed = boolean.", () => {
  test("Interface should have _id, item, and completed properties", () => {
    const item: ITodoItem = {
      _id: new mongoose.Types.ObjectId(),
      item: "Buy groceries",
      completed: false,
    };
    expect(item._id).toBeInstanceOf(mongoose.Types.ObjectId);
    expect(typeof item.item).toBe("string");
    expect(typeof item.completed).toBe("boolean");
  });

  test("Interface should correctly infer types", () => {
    const item: ITodoItem = {
      _id: new mongoose.Types.ObjectId(),
      item: "Buy groceries",
      completed: false,
    };

    expect(item._id).toBeDefined();
    expect(typeof item.item).toBe("string");
    expect(typeof item.completed).toBe("boolean");
  });
});

describe("Test cases of the todo item with a mock function using the ITodoItem interface", () => {
  function createMockTodoItem(): ITodoItem {
    return {
      _id: new mongoose.Types.ObjectId(),
      item: "Mock Todo Item",
      completed: false,
    };
  }

  test("test the ITodoItem interface with mock function", () => {
    const mockTodoItem = createMockTodoItem();

    expect(mockTodoItem._id).toBeInstanceOf(mongoose.Types.ObjectId);
    expect(typeof mockTodoItem.item).toBe("string");
    expect(typeof mockTodoItem.completed).toBe("boolean");
  });
});
