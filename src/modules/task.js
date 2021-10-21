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

  getFormattedDate() {
    const month = this.date.split("/")[0];
    const day = this.date.split("/")[1];
    const year = this.date.split("/")[2];
    return `${month}/${day}/${year}`;
  }

  getCompleteStatus() {
    return this.isComplete;
  }

  changeCompleteStatus() {
    this.isComplete === false
      ? (this.isComplete = true)
      : (this.isComplete = false);
    return this.isComplete;
  }
}

export { Task };
