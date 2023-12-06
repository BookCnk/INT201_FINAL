    
import {
    // addTodoHandler,
    beforeUnloadHandler,
    loadHandler
  } from './eventHandler/eventController.js'

window.addEventListener('load', () => {
    loadHandler()
})
window.addEventListener('beforeunload', (event) => {
    beforeUnloadHandler(event)
})