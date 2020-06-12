// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Generator Functions-
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '~!@#$%^&*()_+?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  var charlength = prompt("how many characters would you like to generate?");
  if (charlength >= 8 && charlength <= 128) {
    var lowercase = prompt("Do you want lower case?");
    var uppercase = prompt("Do you want upper case?");
    var numbers = prompt("Do you want numeric characters?");
    var symbol = prompt("Do you want special characters?");


  } else {
    alert("you need to be between 8-128 characters");
  }
}
//DOM elements
const charlengthEl = document.getElementById('charlength');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');
const writePasswordEl = document.getElementById('WritePassword');
const passwordEl = document.getElementById('password');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumber,
  symbol: getRandomSymbol,
};
// Generate Event Listener
generateBtn.addEventListener('click', function() {
  var hasCharlength = prompt("how many characters would you like to generate?");
  var hasLower, hasUpper, hasNumber, hasSymbol;
  if (hasCharlength >= 8 && hasCharlength <= 128) {
       hasLower = confirm("Do you want lower case?");
       hasUpper = confirm("Do you want upper case?");
       hasNumber = confirm("Do you want numeric characters?");
       hasSymbol = confirm("Do you want special characters?");


  } else {
    alert("you need to be between 8-128 characters");
  }
  /*const hasCharlength = charlengthEl;
  const hasLower = lowercaseEl;
  const hasUpper = uppercaseEl
  const hasNumber = numbersEl;
  const hasSymbol = symbolEl;*/

  passwordEl.textContent = generatePassword(
    hasCharlength,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
  );
})

// Generate Password Function
function generatePassword(charlength, lower, upper, numbers, symbol ) {
  // 1. Initiate pw variable
  // 2. Filter out unselected types
  // 3. loop over length call
  // 4. Add final pw to the pw var and return

  let generatePassword = '';
  const typesCount = lower + upper + numbers + symbol;
  const typesArr = [ { lower }, { upper }, { numbers }, { symbol }].filter
    (
      item => Object.values(item)[0]
    );

  //console.log('typesArr: ', typesArr);
    var password = "";
  for (let i = 0; i < charlength; i+=typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      //console.log('funcName: ', funcName)

      password += randomFunc[funcName]();
    });
  }
  console.log(password)
  return password
} 