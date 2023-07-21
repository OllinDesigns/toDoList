// this was a typescript test that didnt suceed. __tests__/application/useCases/app.get.test.ts
import { MockApp } from "../../../test-utils/get-mockApp"; // Make sure to provide the correct path to MockApp
import request from 'supertest';
import { ITodoItem } from '../../../src/application/dtos/IToDoItem';
import mongoose from "mongoose";
import { Request, Response } from 'express'; // Import the Request and Response objects
import { MongoMemoryServer } from 'mongodb-memory-server';


const mongoServer = new MongoMemoryServer();

// Create a mock Express app using the custom router
const mockApp = new MockApp();

// Import the toDoController function directly
import toDoController from '../../../src/application/controllers/toDoController';

beforeAll(async () => {
  // Set the debug environment variable to enable debugging
  process.env.DEBUG = "mongodb-memory-server:*";

  // Start the in-memory MongoDB server and get its URI
  const mongoUri = await mongoServer.getUri();
  // Connect to the in-memory MongoDB server
  await mongoose.connect(mongoUri);
});


afterAll(async () => {
  // Stop the in-memory MongoDB server and close the mongoose connection
  await mongoose.disconnect();
  await mongoServer.stop();
});

// Call the toDoController function with the mock app
toDoController(mockApp);

describe('app.get("/todo") route', () => {
  test('should return JSON data from MongoDB', async () => {
    // Mock the Todo.find() call to return some data
    const mockData: ITodoItem[] = [
      { _id: new mongoose.Types.ObjectId(), item: 'Buy groceries', completed: false },
      { _id: new mongoose.Types.ObjectId(), item: 'Walk the dog', completed: true },
    ];

    // Mock the Todo.find() function to return mockData
    jest.spyOn(mockApp, 'get').mockImplementation((path, handler) => {
      // Simulate calling the handler function with a mock request and response
      const req = {} as Request; // Create a minimal mock Request object
      const res = {
        json: (data: any) => data, // Simulate the response.json() method
        status: () => res, // Simulate the response.status() method
        end: () => {}, // Simulate the response.end() method
      } as unknown as Response<any, Record<string, any>>; // Use type assertion to specify Response type

      handler(req, res);

      return mockApp; // Return the mock app for chaining
    });

    // Send a GET request to the route using supertest
    const response = await request(mockApp.address()).get('/todo');

    // Check if the response status code is 200 (OK)
    expect(response.status).toBe(200);

    // Check if the response body matches the mocked data
    expect(response.body).toEqual(mockData);
  });

  // Add more test cases if needed
});