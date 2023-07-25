import { Todo } from "../../../src/application/dtos/Todo";

describe("Delete test. This tests the simulation of the delete request and the findByIdAndUpdate method through a mock function.", () => {
  test("It tests if the app would delete from the database when calling Todo.findByIdAndDelete()", async () => {
    const todoToDelete = new Todo({
      item: "Task to delete",
      completed: false,
    });

    jest.spyOn(Todo, "findByIdAndDelete").mockResolvedValue(todoToDelete);

    const result = await Todo.findByIdAndDelete(todoToDelete._id);

    expect(result).toEqual(todoToDelete);
  });
});
