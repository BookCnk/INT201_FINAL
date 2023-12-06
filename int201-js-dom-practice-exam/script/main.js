import { validateEmail , validatePassword, validateUsername } from "./validate";

let itemList = []
let colorBtn = document.getElementById('color-btn')

colorBtn.addEventListener('click',()=>{
  const rainbow = document.getElementById("rainbow");
  const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
  rainbow.style.backgroundColor = colorArray[Math.floor(Math.random()* colorArray.length)]
  console.log((colorArray[Math.floor(Math.random()* colorArray.length)]));
})  

// ========== add section

let ItemBtn = document.getElementById('add-btn')

ItemBtn.addEventListener("click", () => {
  const inputBackpack = document.getElementById("item-input");
  const errorMsg = document.getElementsByClassName("error")[0];
  if (!inputBackpack.value) {
    errorMsg.textContent = "Plese Enter an item to continue!";
    return;
  }
  errorMsg.textContent = "";
  const ul = document.getElementById("listItem").firstElementChild;
  const li = document.createElement('li')
  li.textContent = inputBackpack.value;
  itemList.push(inputBackpack.value)
  ul.appendChild(li)
  inputBackpack.value = null // ทำให้เป็นค่าว่างหลัง Add เสร็จ
});

// ============ clear section

let backpackSection = document.getElementById('backpack')
let clearButton = backpackSection.querySelectorAll('button')[1]

clearButton.addEventListener('click',()=>{
  const ul = document.getElementById("listItem").querySelector('ul');
  ul.textContent = '';
  itemList = []
})

let submitBtn = document.getElementById("submit-btn");
let formElement = document.querySelector('.form'); // ใช้ querySelector แทน getElementsByName

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let errorMessage = formElement.querySelector('.error'); // ใช้ querySelector แทน getElementsByClassName
  errorMessage.textContent = '';

  let usernameInput = formElement.querySelectorAll('.input')[0];
  let emailInput = formElement.querySelectorAll('.input')[1];
  let passwordInput = formElement.querySelectorAll('.input')[2];

  if (!validateUsername(usernameInput.value)) {
    errorMessage.textContent = "Username is Invalid make sure to contain uppercase, number and not special character";
  } else if (!validateEmail(emailInput.value)) {
    errorMessage.textContent = "Email is Invalid"; // แก้ข้อความ
  } else if (!validatePassword(passwordInput.value)) {
    errorMessage.textContent = "Password is Invalid make sure to contain uppercase, lowercase, number and special character";
  } else {
    errorMessage.textContent = "Successfully! Yay";
  }
});



window.addEventListener('load', () => {
  const oldItemList = JSON.parse(localStorage.getItem('itemlist'))
  Array.from(oldItemList).forEach(item => {
    const newItem = document.createElement('li')
    newItem.textContent = item
    itemList.push(item)
    document.getElementById('listItem').querySelector('ul').appendChild(newItem)
  })
  const oldColor = JSON.parse(localStorage.getItem('color')) //get Item
  document.getElementById('rainbow').style.backgroundColor = oldColor //  เอามา Show 
})


window.addEventListener('unload', (e) =>{
  e.preventDefault()
  localStorage.setItem('itemlist' , JSON.stringify(itemList)) //store
  localStorage.setItem('color', JSON.stringify(document.getElementById('rainbow').style.backgroundColor)) //store
})


