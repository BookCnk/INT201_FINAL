const todoUserInterface = require('./UI/todoList.js')
const todoManagement = require('./lib/todoManagement.js')

const fs = require('fs')

window.document.body.innerHTML = fs.readFileSync('./index.html')

const { showTodoItem, showNumberOfDone, showNumberOfNotDone } =
  todoUserInterface()
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone
} = todoManagement()

test('showTodoItems', () => {
  const itemList = document.getElementById('listTodo')

  const id1 = addTodo('Watch Movies')
  showTodoItem(id1, 'Watch Movies')
  expect(itemList.childNodes).toHaveLength(1)
  const firstDiv = itemList.childNodes[0]
  const firstDivChild = firstDiv.childNodes
  const firstPChild = firstDivChild[0]
  const firstDoneButton = firstDivChild[1]
  const firstRemoveButton = firstDivChild[2]

  expect(firstDiv.getAttribute('id')).toBe('1')
  expect(firstDiv.childNodes).toHaveLength(3)
  expect(firstDivChild).toHaveLength(3)
  expect(firstPChild.nodeName).toBe('P')
  expect(firstPChild.textContent).toBe('Watch Movies')
  expect(firstDoneButton.nodeName).toBe('BUTTON')
  expect(firstDoneButton.textContent).toBe('Not Done')
  expect(firstRemoveButton.nodeName).toBe('BUTTON')
  expect(firstRemoveButton.textContent).toBe('remove')

  const id2 = addTodo('Visit Grandmother')
  showTodoItem(id2, 'Visit Grandmother')
  expect(itemList.childNodes).toHaveLength(2)
  const secondDiv = itemList.childNodes[1]
  const secondDivChild = secondDiv.childNodes
  const secondPChild = secondDivChild[0]
  const secondDoneButton = secondDivChild[1]
  const secondRemoveButton = secondDivChild[2]

  expect(secondDiv.getAttribute('id')).toBe('2')
  expect(secondDiv.childNodes).toHaveLength(3)
  expect(secondDivChild).toHaveLength(3)
  expect(secondPChild.nodeName).toBe('P')
  expect(secondPChild.textContent).toBe('Visit Grandmother')
  expect(secondDoneButton.nodeName).toBe('BUTTON')
  expect(secondDoneButton.textContent).toBe('Not Done')
  expect(secondRemoveButton.nodeName).toBe('BUTTON')
  expect(secondRemoveButton.textContent).toBe('remove')

  const id3 = addTodo('Coding')
  showTodoItem(id3, 'Coding')
  expect(itemList.childNodes).toHaveLength(3)

  const thirdDiv = itemList.childNodes[2]
  const thirdDivChild = thirdDiv.childNodes
  const thirdPChild = thirdDivChild[0]
  const thirdDoneButton = thirdDivChild[1]
  const thirdRemoveButton = thirdDivChild[2]

  expect(thirdDiv.getAttribute('id')).toBe('3')
  expect(thirdDiv.childNodes).toHaveLength(3)
  expect(thirdDivChild).toHaveLength(3)
  expect(thirdPChild.nodeName).toBe('P')
  expect(thirdPChild.textContent).toBe('Coding')
  expect(thirdDoneButton.nodeName).toBe('BUTTON')
  expect(thirdDoneButton.textContent).toBe('Not Done')
  expect(thirdRemoveButton.nodeName).toBe('BUTTON')
  expect(thirdRemoveButton.textContent).toBe('remove')
})

test('countDoneItem', () => {
  const summaryTodo = document.getElementById('summaryTodo')
  const doneItems = getNumberOfDone()
  const doneP = document.getElementById('done')
  showNumberOfDone(doneItems)
  expect(summaryTodo.childElementCount).toBe(2)
  expect(doneP.textContent).toBe(`Number of Done:${doneItems}`)
  expect(doneItems).toBe(0)
})

test('countNotDoneItem', () => {
  const summaryTodo = document.getElementById('summaryTodo')
  const notDoneItems = getNumberOfNotDone()
  const notDoneP = document.getElementById('notDone')
  showNumberOfNotDone(notDoneItems)
  expect(summaryTodo.childElementCount).toBe(2)
  expect(notDoneP.textContent).toBe(`Number of Not Done:${notDoneItems}`)
  expect(notDoneItems).toBe(3)
})
