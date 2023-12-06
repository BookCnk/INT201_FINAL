class Todo {
  static runningId = 1

  static setRunningId(loadingId) {
    Todo.runningId = loadingId
  }

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
  setDone(value) {
    this.done = value
  }
}

// export { Todo }
module.exports = Todo
