class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setTasks(tasks) {
    this.taskList = tasks;
  }

  getTasks() {
    return this.taskList;
  }

  addTask(task) {
    if (this.taskList.includes(task)) return;
    this.taskList.push(task);
  }

  removeTask(task) {
    this.taskList = this.taskList.filter((item) => item !== task);
  }
}

export { Project };
