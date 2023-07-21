const { MockApp } = require("../../../test-utils/get-mockApp"); // Make sure to provide the correct path to MockApp
const request = require("supertest");
const mongoose = require("mongoose");

// Import the Request and Response objects (no need for type annotations)
const { Request, Response } = require("express");

// Create a mock Express app using the custom router
const mockApp = new MockApp();

// Import the toDoController function directly
const toDoController = require("../../../src/application/controllers/toDoController");

// Call the toDoController function with the mock app
toDoController(mockApp);

describe('app.get("/todo") route', () => {
  test('should return JSON data from MongoDB', async () => {
    // Mock the Todo.find() call to return some data
    const mockData = [
      { _id: new mongoose.Types.ObjectId(), item: 'Buy groceries', completed: false },
      { _id: new mongoose.Types.ObjectId(), item: 'Walk the dog', completed: true },
    ];

    // Mock the Todo.find() function to return mockData
    jest.spyOn(mockApp, 'get').mockImplementation((path, handler) => {
      // Simulate calling the handler function with a mock request and response
      const req = {}; // Create a minimal mock Request object
      const res = {
        json: (data) => data, // Simulate the response.json() method
        status: () => res, // Simulate the response.status() method
        end: () => {}, // Simulate the response.end() method
      }; // No need for type assertion in JavaScript

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
