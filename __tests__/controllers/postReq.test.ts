import { Todo } from "../../src/models/taskModel";

describe("Submit test. This tests the simulation of the post request and the save() method through a mock function. It tests if the app would save and update data on the database", () => {
  test("It should save the newly created document (todo) into the MongoDB database.", async () => {
    const newTodo = new Todo({
      item: "My new task",
      completed: false,
    });

    jest.spyOn(newTodo, "save").mockResolvedValue(newTodo);

    const savedTodo = await newTodo.save();

    expect(savedTodo).toEqual(newTodo);
  });
});
