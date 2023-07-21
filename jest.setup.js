const mongoose = require('mongoose');

beforeAll(async () => {
  // Connect to a test MongoDB database on MongoDB Atlas (replace <password> with your actual password)
  await mongoose.connect(
    "mongodb+srv://ollinDesigns:claveParaAtlas@cluster0.1b2ylxi.mongodb.net/todolist-db?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
});

afterAll(async () => {
  // Disconnect from the test database after all tests are done
  await mongoose.disconnect();
});
