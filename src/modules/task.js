class Task {
  constructor(name, date = "No date") {
    this.name = name;
    this.date = date;
    this.isComplete = false;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }

  changeCompleteStatus() {
    this.isComplete === false
      ? (this.isComplete = true)
      : (this.isComplete = false);
    return this.isComplete;
  }
}

export { Task };
