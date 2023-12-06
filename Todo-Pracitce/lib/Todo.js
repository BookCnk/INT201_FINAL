class Todo {
    static runningId = 1

    static setRunningId(loadingId) {
        Todo.runningId = loadingId
    }

    constructor(id, description, done = false) {
        this.id = id ?? Todo.runningId++
        // console.log(this.id)
        this.description = description
        this.done = done
        // this.done = done ?? false
        // console.log(this.done)
    }

    getTodo(){
        return{id: this.id, description: this.description, done: this.done}
    }

    setDescription(newDescription) {
        this.description = newDescription
    }

    setDone(value) {
        this.done = value
    }
}

export default Todo;
// module.exports = Todo

// Todo class
// - static runningId = 1
// //properties
// -id //unique id
// -description //todo detail

// //methods
// -getTodo() //returns {id, description} object
// -setDescription(newDescription) //allows to edit description