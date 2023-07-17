// app ts proposed from chat gpt

import express from 'express';
import { TaskListUseCase } from './src/core/domain/use-cases/taskListUseCase'
import { TaskRepository } from './src/infrastructure/repositories/TaskRepository';
import { TaskList } from './src/core/domain/entities/TaskList'

// Create an instance of Express
const app = express();

// Initialize the task list use case
const taskRepository = new TaskRepository(); // Adjust this based on your actual repository implementation
const taskListUseCase = new TaskListUseCase(taskRepository);

// Define API routes
app.get('/tasks', (req, res) => {
  const tasks = taskListUseCase.getTasks();
  res.json(tasks);
});

// show something on screen
app.get('/', (req, res) => {
    res.send('Hello, Gurrus!');
  });


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
