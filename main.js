const domElementId = document.getElementById("myHeading")
const domByTagName = document.getElementsByTagName("ul")
const domByName =document.getElementsByName("color")
const domClassName = document.getElementsByClassName("list-item")
const domQuerySelector = document.querySelector(".heading")
const domQuerySelectorAll = document.querySelectorAll(".heading")
console.log(domElementId) // <h1 id="myHeading">
console.log(domByTagName)// HTMLCollection { 0: ul.all-list-items, 1: ul, length: 2 }
console.log(domByTagName.length) //2
console.log(domByTagName.item(1)) //<ul class="all-list-items">...</ul>
console.log(domByName) //NodeList(3) [input#colorRed, input#colorGreen, input#colorBlue]
console.log(domClassName)//HTMLCollection(6) [li.list-item, li.list-item,...]
console.log(domQuerySelector)//<h2 class="heading">Document Object Model</h2>
console.log(domQuerySelectorAll)//NodeList(2) [h2.heading, h2.heading

// lacture Show Error is a number and create p 
// let createP = document.createElement('p')
// let scriptElement = document.querySelector('script')
// scriptElement.insertAdjacentElement(`beforebegin`,createP) //ต่อหน้า
// // scriptElement.insertAdjacentElement(`afterend`,createP) //ต่อหลัง
// const inputElements = document.querySelectorAll('input');
// inputElements.forEach(inputElement => {
//     inputElement.addEventListener('keypress', (event) => {
//         const inputValue = event.target.value;
//         if (!isNaN(inputValue)) {
//             event.preventDefault();
//             console.log('It is a number');
//             createP.textContent = 'It is a number'
//         }
//     });
// });