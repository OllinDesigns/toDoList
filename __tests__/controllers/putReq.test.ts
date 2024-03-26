import { Todo } from "../../src/models/Todo";

describe("Update test. This tests the simulation of the put request and the findByIdAndUpdate method through a mock function. ", () => {
  test("It tests if the app would update an item when calling Todo.findByIdAndUpdate()", async () => {
    const todoToUpdate = new Todo({
      item: "Existing task",
      completed: false,
    });

    const updatedTodoData = {
      item: "Updated task",
      completed: true,
    };

    jest.spyOn(Todo, "findByIdAndUpdate").mockResolvedValue(updatedTodoData);

    const result = await Todo.findByIdAndUpdate(
      todoToUpdate._id,
      updatedTodoData
    );

    expect(result).toEqual(updatedTodoData);
  });
});
