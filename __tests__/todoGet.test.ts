// __tests__/todoGet.test.ts

import request from "supertest";
import express, { Express } from "express";
// import toDoController from "../src/application/controllers/toDoController";
import mongoose from "mongoose";

describe("GET /todo", () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    // toDoController(app);
  });

  it("should return all items", async () => {
    const response = await request(app).get("/todo");

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
});
