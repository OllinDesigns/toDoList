import { Todo } from "../../src/models/Todo";

describe("Read test. This tests the simulation of a get request and the find method through a mock function. It tests if the app would read the data from the database", () => {
  it("Should return mock data when calling Todo.find()", async () => {
    const mockData = [
      { item: "Task 1", completed: false },
      { item: "Task 2", completed: true },
    ];
    jest.spyOn(Todo, "find").mockResolvedValue(mockData);

    const data = await Todo.find({});

    expect(data).toEqual(mockData);
  });
});
