// import { Todo } from './todo.js'
const Todo = require('./todo.js')
function todoManagement() {
  let todos = []
  function addTodo(desc) {
    const newTodo = new Todo(desc)
    todos.push(newTodo)
    return newTodo.id
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    return todos.filter((todo) => todo.done === true).length
  }
  function getNumberOfNotDone() {
    return todos.filter((todo) => todo.done === false).length
  }
  function setItemToDone(doneId) {
    const doneItem = todos.find((todo) => todo.id === Number(doneId))
    doneItem.setDone(true)
  }
  function loadTodos(userTodos) {
    todos = userTodos
    Todo.setRunningId(userTodos[userTodos.length - 1].id + 1)
  }
  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    setItemToDone,
    loadTodos
  }
}
// export { todoManagement }
module.exports = todoManagement
