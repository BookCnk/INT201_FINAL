class Todo { 
    static autoId = 1

    constructor(description) {
        this.id = Todo.autoId++
        this.description = description
    }

    getTodo() {
        return {id : this.id, description : this.description}
    }

    setDescription(newDescription) {
        this.description = newDescription
        return this.description
    }
}

const TodoManagement = () => {
    let todos = []

    const addTodo = (description) => {
        return todos.push(new Todo(description))
    }

    const removeTodo = (removeId) => {
        todos = todos.filter(todo => todo.id !== removeId)
    }

    const findTodo = (searchId) => {
        return todos.find(todo => todo.id === searchId)
    }

    const getTodos = () => {
        return todos
    }

    return [addTodo, removeTodo, findTodo, getTodos]
}

const [addTodo, removeTodo, findTodo, getTodos] = TodoManagement()

// let addTodo = (desc) => {
//     todos.push(new Todo(desc))
// }

// let removeTodo = (removeId) => {
//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id === removeId) {
//             todos.splice(i, 1)
//             // for (let j = i; j < todos.length; j++) {
//             //     todos[j].id--
//             // }
//             return `Todo with id ${removeId} removed, ${todos.length} todos left`
//         }
//     }
//     return `Todo with id ${removeId} not found`
// }

// let findTodo = (searchId) => {
//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id === searchId) {
//             return todos[i]
//         }
//     }
//     return `Todo with id ${searchId} not found`
// }

// let getTodos = () => {
//     return todos
// }

console.log('Adding todos...')
console.log('---------------------')
console.log(addTodo('go to sleep'))
console.log(addTodo('get a new keyboard'))
console.log(addTodo('buy a world'))
console.log('---------------------')
removeTodo(2)
console.log(`Todo with id 2 removed, ${getTodos().length} todos left`)
console.log('---------------------')
console.log(findTodo(3))
console.log('---------------------')
console.log(getTodos())
console.log('\n=====================')
console.log('=====================\n')
console.log('Test function from class Todo')
console.log('---------------------')
console.log(findTodo(1).setDescription('go to sleep and dream'))
console.log(findTodo(1).getTodo())
