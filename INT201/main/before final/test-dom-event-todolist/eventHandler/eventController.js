// import { todoManagement } from '../lib/todoManagement.js'
// import { todoUserInterface } from '../UI/todoList.js'
// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoUserInterface()

// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

const todoManagement = require('../lib/todoManagement.js')
const todoList = require('../UI/todoList.js')

const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoList()
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement()

const addTodoHandler = () => {
  const todoItem = document.querySelector('input').value
  if (todoItem.trim().length !== 0) {
    const todoId = addTodo(todoItem)
    showTodoItem(todoId, todoItem)
    document.getElementById(todoId).children[1].addEventListener('click', notDoneButtonHandler)
    document.getElementById(todoId).children[2].addEventListener('click', removeButtonHandler)
    document.querySelector('input').value = ''
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
  }
}

const notDoneButtonHandler = (event) => {
  const todoId = Number(event.target.parentElement.id)
  event.target.textContent = 'Done'
  event.target.style = 'background-color: green; color: white'
  setItemToDone(todoId)
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())

}

const removeButtonHandler = (event) => {
  const todoId = Number(event.target.parentElement.id)
  removeTodo(todoId)
  removeTodoItem(todoId)
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

// export {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler,
// }

module.exports = {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler
}
