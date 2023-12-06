import { products } from './data/products.js'

function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const inputItem = document.querySelector('input')
    inputItem.addEventListener('input', filterItemsHandler)
    showItems(items)

  }

  const filterItemsHandler = () => {
    const inputI = document.querySelector('input').value
    const aryFind = items.filter((e) => e.keywords.toLowerCase().includes(inputI.toLowerCase()))
    showItems(aryFind)
  }

  const showItems = (items) => {
    const aryRecieve = items
    const ulParent = document.getElementById('items')
    ulParent.textContent = ''
    for (let i = 0; i < aryRecieve.length; i++) {
      const liItem = document.createElement('li')
      liItem.textContent = `ID:${aryRecieve[i].id}, NAME:${aryRecieve[i].name}, KEYWORDS:${aryRecieve[i].keywords}`
      ulParent.appendChild(liItem)
    }
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
export { itemList }
const { initialPage, filterItemsHandler, showItems } = itemList(products)
initialPage()