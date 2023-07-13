class Task {
  constructor(public description: string, public completed: boolean = false) {}
}

class TaskList {
  private tasks: Task[] = [];

  addTask(description: string): void {
    const newTask = new Task(description);
    this.tasks.push(newTask);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}

// Create an instance of TaskList
const todoList = new TaskList();

// Add tasks to the list
todoList.addTask('Buy groceries');
todoList.addTask('Finish homework');
todoList.addTask('Call a friend');

// Get the tasks from the list
const tasks = todoList.getTasks();

// Print the tasks
console.log('Tasks:');
tasks.forEach((task, index) => {
  console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
});

//return
