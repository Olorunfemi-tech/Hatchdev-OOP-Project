class Task {
  description: string;
  status: string;

  constructor(description: string) {
    this.description = description;
    this.status = "pending"; 
  }

  completeTask(): void {
    this.status = "successful"; 
  }

  updateTask(newDescription: string): void {
    this.description = newDescription; 
  }
}

class TaskManager {
  private tasks: Task[] = []; 

  createTask(description: string): Task {
    const newTask = new Task(description);
    this.tasks.push(newTask); 
    return newTask;
  }

  listTasks(): void {
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}: ${task.description} - ${task.status}`);
    });
  }

  completeTask(index: number): void {
    if (this.tasks[index]) {
      this.tasks[index].completeTask(); 
    } else {
      console.log("Task not found!");
    }
  }
}

// Example usage
const taskManager = new TaskManager();

taskManager.createTask("Learn TypeScript");
taskManager.createTask("Build a task manager");

taskManager.listTasks(); 

taskManager.completeTask(0); 

taskManager.listTasks(); 
