"use strict";
class Task {
    constructor(description) {
        this.description = description;
        this.status = "pending"; // Default status
    }
    completeTask() {
        this.status = "successful"; // Update status when completed
    }
    updateTask(newDescription) {
        this.description = newDescription; // Update task description
    }
}
class TaskManager {
    constructor() {
        this.tasks = []; // Array to hold tasks
    }
    createTask(description) {
        const newTask = new Task(description);
        this.tasks.push(newTask); // Add new task to the tasks array
        return newTask;
    }
    listTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task.description} - ${task.status}`);
        });
    }
    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].completeTask(); // Complete a specific task
        }
        else {
            console.log("Task not found!");
        }
    }
}
// Example usage
const taskManager = new TaskManager();
taskManager.createTask("Learn TypeScript");
taskManager.createTask("Build a task manager");
taskManager.listTasks(); // List all tasks
taskManager.completeTask(0); // Complete the first task
taskManager.listTasks(); // List all tasks again to see the updated status
