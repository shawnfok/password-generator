var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var upperEl = document.getElementById("upper");
var lowerEl = document.getElementById("lower");
var numberEl = document.getElementById("number");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");

var randomFunction = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbols: getRandomSymbol,
}

generateEl.addEventListener("click", () => {
  var length = lengthEl.value;

  console.log(length);
})

// User input variables

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
  var symbols = "!@#$%^&*(){}[]<>"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateEl.addEventListener("click", writePassword);
