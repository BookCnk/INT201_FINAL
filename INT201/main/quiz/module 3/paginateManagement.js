
// npm test CommonJS
// const { template } = require('@babel/core')
const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

// browser ES module
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

function paginateManagement(items, rows) {

  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const ItemsOfCurrent = getItemsOfCurrentPage(
        products,
        currentPageNumber,
        rowsPerPage
      ) // return array ของหน้านั้น

    const productsUl = document.getElementById('products')
    ItemsOfCurrent.forEach((item)=>{
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`
      productsUl.appendChild(liElement)
    })
  }

  const pageHandler = (event) => {
    const productsUl = document.getElementById('products')
    productsUl.textContent=''

    const pageStyle = document.querySelectorAll('button')
    pageStyle.forEach((page)=>(page.style = 'border: 1px solid #999'))

    const currentPage = event?.target.id ?? 1
    console.log(currentPage)
    showItemsOfCurrentPage(currentPage)

    // ค้นหาปุ่มที่มี id เท่ากับค่าของ currentPage และเก็บ reference ไว้ใน targetPageButton.
    const targetPageButton = document.getElementById(currentPage)
    //กำหนดสีพื้นหลังของปุ่มที่มี id เท่ากับ currentPage เป็น LightSteelBlue. 
    //เป็นการhighlight ปุ่มที่เลือกอยู่เพื่อแสดงว่าเป็นหน้าปัจจุบัน.
    targetPageButton.style = 'background-color: LightSteelBlue'
  }

  const showPageNumbers = () => {
    const totalPages = getTotalPages(products, rowsPerPage) // return button will create

    const paginateDiv = document.querySelector('.pagination')
    for (let page = 1; page <= totalPages; page++) {
      const buttonPage = document.createElement('button')
      buttonPage.textContent = page
      buttonPage.setAttribute('id', page)
      paginateDiv.appendChild(buttonPage)
      buttonPage.addEventListener('click', pageHandler) // add event
    }
  }

return {
  showPageNumbers,
  pageHandler
  }
}


// npm test CommonJS
module.exports = paginateManagement

// browser ES module
// export { paginateManagement }
// const { showPageNumbers,  pageHandler } = paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()









// function paginateManagement(items, rows) {
//     const products = items
//     const rowsPerPage = rows

//     let showPageNumber = () => {
//         let totalPage = getTotalPages(products, rowsPerPage);
//         let divPagination = document.querySelector(".pagination");

//         for (let page = 1; page <= totalPage; page++) {
//             let createButtom = document.createElement("button")
//             createButtom.id = page
//             createButtom.textContent = page
//             divPagination.appendChild(createButtom)

//             createButtom.addEventListener("click", pageHandler)
//         }
//     }

//     let showItemsOfCurrentPage = (currentPageNumber) => {
//         let items = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
//         let ulElement = document.getElementById("products")
//         ulElement.innerHTML = ""
//         for (const item of items) {
//             let createLi = document.createElement("li");
//             createLi.textContent = `ID:${item.id}, NAME:${item.name}`
//             ulElement.appendChild(createLi)
//         }
//     }

//     // let pageHandler = (event) => {
//     //     let totalPage = getTotalPages(products, rowsPerPage);
    
//     //     showItemsOfCurrentPage(event.target.id )
//     //     for (let page = 1; page <= totalPage; page++) {
//     //         let btn = document.getElementById(page)
//     //         btn.style.removeProperty("background-color")
//     //         btn.style.removeProperty("border")
//     //     }
//     //     event.target.style.backgroundColor = "LightSteelBlue"
//     //     event.target.style.border = "1px solid #999"
//     // }

//     const pageHandler = (event) => {
//         const productsUsee = document.getElementById('products')
//         productsUsee.textContent = '' // remove previous page’s items
    
//         const pageColor = document.querySelectorAll('button')
    
//         pageColor.forEach((page) =>(
//           page.style = 'border: 1px solid #999' // remove stylesheet of previous page button and assign to original button stylesheet 'border: 1px solid #999'
//         ))
    
//         const currentPage = event?.target.id ?? 1
//         // event?.target.id จะใช้เพื่อดึงค่า id ของ Element ใน event , ? 
//         // ?? จะใช้เพื่อตรวจสอบว่าค่าที่ได้มีค่าหรือไม่ หากมีค่าก็จะใช้ค่านั้น หากไม่มีค่าก็จะใช้ค่าที่สองที่กำหนดไว้
    
    
    
//         showItemsOfCurrentPage(currentPage)
//         // adding stylesheet 'background-color: LightSteelBlue'
//         const targetPageButton = document.getElementById(currentPage)
//         targetPageButton.style = 'background-color: LightSteelBlue'
    
        
//       }

//     showItemsOfCurrentPage()
//     showPageNumber()
// }

// // npm test CommonJS
// // module.exports = paginateManagement

// browser ES module
// export { paginateManagement }
// const { showPageNumbers,  pageHandler } = paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()