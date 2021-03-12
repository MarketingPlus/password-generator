// input types and linking them in js

const characterSliderRange = document.getElementById('characterSliderRange')
const numberBoxNumber = document.getElementById('numberBoxNumber')

const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const symbolsElement = document.getElementById('symbols')
const numbersElement = document.getElementById('numbers')

const button = document.getElementById('generate')


characterSliderRange.addEventListener('input', linkCharacters)
numberBoxNumber.addEventListener('input', linkCharacters)

button.addEventListener('submit', e => {
  e.preventDefault()
  const characterSlider = numberBoxNumber.value
  const uppercase = uppercaseElement.checked
  const lowercase = lowercaseElement.checked
  const symbols = symbolsElement.checked
  const numbers = numbersElement.checked
  const password = generatePassword(characterSlider, uppercase, lowercase, symbols, numbers)
})

function linkCharacters(e) {
  const value = e.target.value
  characterSliderRange.value = value
  numberBoxNumber.value = value
}


// var generateBtn = document.querySelector("#generate");function writePassword() {var password = generatePassword();var passwordText = document.querySelector("#password");passwordText.value = password;}generateBtn.addEventListener("click", writePassword);
