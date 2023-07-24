describe("This tests the correct fonctioning of the toDoSchema in the toDoController", () => {
  test("test if the toDoSchema of the toDoController has a  String constructor function", () => {
    const toDoSchema = {
      item: String,
      completed: { type: Boolean, default: false },
    };
    expect(toDoSchema.item).toBe(String);
  });

  test("test if the completed property has the correct default value set to false.", () => {
    const toDoSchema = {
      item: { type: String },
      completed: { type: Boolean, default: false },
    };
    expect(toDoSchema.completed.default).toBe(false);
  });

  test("test if the completed property is set to the data type (Boolean) in the schema.", () => {
    const toDoSchema = {
      item: { type: String },
      completed: { type: Boolean, default: false },
    };
    expect(toDoSchema.completed.type).toBe(Boolean);
  });
});
