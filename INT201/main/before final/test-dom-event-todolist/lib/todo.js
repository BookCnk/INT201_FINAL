class Todo {
  static runningId = 1
  constructor(description) {
    this.id = Todo.runningId++
    this.description = description
    this.done = false
  }
  getTodo() {
    return { id: this.id, description: this.description, done: this.done }
  }
  setDescription(newDescription) {
    this.description = newDescription
  }
  setDone() {
    this.done = true
  }
}

// export { Todo }
module.exports = Todo
