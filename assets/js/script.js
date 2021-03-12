// input types and linking them in js

const characterSliderRange = document.getElementById('characterSliderRange')
const numberBoxNumber = document.getElementById('numberBoxNumber')

const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const symbolsElement = document.getElementById('symbols')
const numbersElement = document.getElementById('numbers')

const button = document.getElementById('generate')

const UPPERCASE_CHAR = arrayLoop(65, 90)
const LOWERCASE_CHAR = arrayLoop(97, 122)
const SYMBOL_CHAR = arrayLoop(33, 46)
const NUMBER_CHAR = arrayLoop(48, 57).concat(arrayLoop(58, 64)
).concat(arrayLoop(91, 96)
).concat(arrayLoop(123, 126)
)

characterSliderRange.addEventListener('input', linkCharacters)
numberBoxNumber.addEventListener('input', linkCharacters)

button.addEventListener('click', e => {
  e.preventDefault()
  const characterSlider = numberBoxNumber.value
  const uppercase = uppercaseElement.checked
  const lowercase = lowercaseElement.checked
  const symbols = symbolsElement.checked
  const numbers = numbersElement.checked
  const password = generatePassword(characterSlider, uppercase, lowercase, symbols, numbers)
})

function generatePassword(characterSlider, uppercase, lowercase, symbols, numbers) {
  console.log(LOWERCASE_CHAR)
}

function arrayLoop(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function linkCharacters(e) {
  const value = e.target.value
  characterSliderRange.value = value
  numberBoxNumber.value = value
}


// var generateBtn = document.querySelector("#generate");function writePassword() {var password = generatePassword();var passwordText = document.querySelector("#password");passwordText.value = password;}generateBtn.addEventListener("click", writePassword);
