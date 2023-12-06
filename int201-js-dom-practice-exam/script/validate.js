// const validateUsername = (username) => {
//   if (!username || username.length <= 5) return false;
//   const special = /[$#%^&*()_+!]/;
//   const upper = /[A-Z]/;
//   const number = /[0-9]/;
//   return ( !special.test(username) && upper.test(username) && number.test(username))
   
  
// };

// const validateEmail = (email ) => {
//   if (!email || email.length <= 5) return false;
//   const emailRegex = /@.*\.com$/;
//   return emailRegex.test(email);
// }

// const validatePassword = (password) => {
//   if (!password || password.length < 8 ) return false
//   const special = /[$#%^&*()_+!]/;
//   const upper = /[A-Z]/;
//   const lower = /[a-z]/;
//   const number = /[0-9]/;
//   return (
//     special.test(password) &&
//     upper.test(password) &&
//     number.test(password) &&
//     lower.test(password)) 
// }; 


// export {validateEmail , validatePassword, validateUsername };


const setOfNumber = '0123456789'
const setOfLowerCase = 'abcdefghijklmnopqrstuvwxyz'
const setOfUpperCase = setOfLowerCase.toUpperCase()
const setOfSpecial = '$#%^&*()_+!'

const arrayOfNumber = [...setOfNumber]
const arrayOfLowerCase = [...setOfLowerCase]
const arrayOfUpperCase = [...setOfUpperCase]
const arrayOfSpecial = [...setOfSpecial]

function validateUsername(username) {
  const arrayOfUsername = [...username]
  return arrayOfUsername.some(char => arrayOfUpperCase.includes(char)) && 
  arrayOfUsername.some(char => arrayOfNumber.includes(char)) && 
  arrayOfUsername.length >= 5 &&
  !arrayOfUsername.some(char => arrayOfSpecial.includes(char))
}

function validateEmail(email) {
  return email.includes('@') && email.endsWith('.com')
}

function validatePassword(password) {
  const arrayOfPassword = [...password]
  return arrayOfPassword.some(char => arrayOfUpperCase.includes(char)) && 
  arrayOfPassword.some(char => arrayOfNumber.includes(char)) && 
  arrayOfPassword.length >= 8 &&
  arrayOfPassword.some(char => arrayOfSpecial.includes(char)) &&
  arrayOfPassword.some(char => arrayOfLowerCase.includes(char))
}
  
  export {validateEmail , validatePassword, validateUsername };