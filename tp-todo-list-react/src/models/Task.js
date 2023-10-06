class Task {
  constructor(name, deadline) {
    this.id = new Date().getTime();
    this.name = name;
    this.deadline = deadline;
  }

  // get id() {
  //   return this.id;
  // }
  // get name() {
  //   return this.name;
  // }
  // get deadline() {
  //   return this.deadline;
  // }
}

export default Task;
