describe("This test is a simulation of a connection to a database mocking console.log and console.error", () => {
  const connectToDatabase = (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
        reject(new Error("Simulated database connection error"));
      }, 100);
    });
  };

  connectToDatabase()
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });

  test("should connect to the database", async () => {
    console.log = jest.fn();
    console.error = jest.fn();

    try {
      await connectToDatabase();

      expect(console.log).toHaveBeenCalledWith("Connected to MongoDB");

      expect(console.error).not.toHaveBeenCalled();
    } catch (error) {
      fail(`Error connecting to MongoDB: ${error}`);
    }
  });
});
