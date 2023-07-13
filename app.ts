import { TaskListUseCase } from './src/application/useCases/taskListUseCase';
import { TaskRepository } from './src/infrastructure/repositories/TaskRepository';

// Create an instance of TaskRepository
const taskRepository = new TaskRepository();

// Create an instance of TaskListUseCase
const taskListUseCase = new TaskListUseCase(taskRepository);

// Add a task using the TaskListUseCase
taskListUseCase.addTask('Buy groceries');
