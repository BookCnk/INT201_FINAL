function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const divListTodo = document.getElementById('listTodo')

    const newDiv = document.createElement('div')
    newDiv.className = 'todoItem'
    newDiv.id = newId

    const pTag = document.createElement('p')
    pTag.textContent = newDescription
    const notDoneButton = document.createElement('button')
    notDoneButton.textContent = 'Not Done'
    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove'

    newDiv.appendChild(pTag)
    newDiv.appendChild(notDoneButton)
    newDiv.appendChild(removeButton)

    divListTodo.appendChild(newDiv)
  }
  function showNumberOfDone(numberOfDone) {
    const doneText = document.getElementById('done')
    doneText.textContent = `Number of Done:${numberOfDone}`
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const notDoneText = document.getElementById('notDone')
    notDoneText.textContent = `Number of Not Done:${numberOfNotDone}`
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
module.exports = todoUserInterface
