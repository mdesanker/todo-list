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

  getTaskAtIndex(index) {
    return this.taskList[index];
  }

  getTaskNames() {
    return this.taskList.map((task) => task.getName());
  }

  addTask(task) {
    if (this.getTaskNames().includes(task.getName())) {
      alert("This task already exists.");
      return;
    }
    this.taskList.push(task);
  }

  removeTask(task) {
    this.taskList = this.taskList.filter((item) => item !== task);
  }

  removeTaskAtIndex(index) {
    this.taskList.splice(index, 1);
  }
}

export { Project };
