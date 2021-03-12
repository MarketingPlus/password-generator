// input types and linking them in js
const characterSliderRange = document.getElementById('characterSliderRange')
const numberBoxNumber = document.getElementById('numberBoxNumber')

// all my check boxes and linking them
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const symbolsElement = document.getElementById('symbols')
const numbersElement = document.getElementById('numbers')

// linking my button so when i click it my function runs
const button = document.getElementById('generate')

// creating arrays for the special characters so i dont have to manually type each code i can justr convert the code number to character 
const UPPERCASE_CHAR = arrayLoop(65, 90)
const LOWERCASE_CHAR = arrayLoop(97, 122)
const SYMBOL_CHAR = arrayLoop(33, 46)
const NUMBER_CHAR = arrayLoop(48, 57).concat(arrayLoop(58, 64)
).concat(arrayLoop(91, 96)
).concat(arrayLoop(123, 126)
)

// linking my slider and number so they both have the same value
characterSliderRange.addEventListener('input', linkCharacters)
numberBoxNumber.addEventListener('input', linkCharacters)

// checking for the users input values for the password length and a boolean if checkboxes have been checked
button.addEventListener('click', e => {
  e.preventDefault()
  const characterSlider = numberBoxNumber.value
  const uppercase = uppercaseElement.checked
  const lowercase = lowercaseElement.checked
  const symbols = symbolsElement.checked
  const numbers = numbersElement.checked
  const password = generatePassword(characterSlider, uppercase, lowercase, symbols, numbers)
})


// my function to generate the password which includes all my different variables 
function generatePassword(characterSlider, uppercase, lowercase, symbols, numbers) {
  console.log(LOWERCASE_CHAR)
}

// my array loop which counts from low number to high number (from a range) to gather the expected values for each character code set
function arrayLoop(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// My function to link both the slider and number box together ensuring they both have the same values
function linkCharacters(e) {
  const value = e.target.value
  characterSliderRange.value = value
  numberBoxNumber.value = value
}


// var generateBtn = document.querySelector("#generate");function writePassword() {var password = generatePassword();var passwordText = document.querySelector("#password");passwordText.value = password;}generateBtn.addEventListener("click", writePassword);
