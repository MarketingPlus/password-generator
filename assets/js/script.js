// input types and linking them in js
const characterSliderRange = document.getElementById('characterSliderRange')
const numberBoxNumber = document.getElementById('numberBoxNumber')

// all my check boxes and linking them
const uppercaseElement = document.getElementById('uppercaseVal')
const lowercaseElement = document.getElementById('lowercaseVal')
const symbolsElement = document.getElementById('symbolsVal')
const numbersElement = document.getElementById('numbersVal')

// linking my button so when i click it my function runs
const button = document.getElementById('generate')

// getting the input area and linking it to js
const passwordShow = document.getElementById('passwordShow')

// linking clipboard button to js 
const clipboard = document.getElementById('clipboard')

// copy to clipboard function
clipboard.addEventListener('click', e => {
  const textOutput = document.getElementById('passwordShow')

  textOutput.select();
  document.execCommand('copy');
  window.alert("You have successfully copied your UNIQUE password to your clipboard 📋")
})

// creating arrays for the special characters so i dont have to manually type each code i can justr convert the code number to character
const UPPERCASE_CHAR = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// linking my slider and number so they both have the same value
characterSliderRange.addEventListener('input', linkCharacters)
numberBoxNumber.addEventListener('input', linkCharacters)

// checking for the users input values for the password length and a boolean if checkboxes have been checked
button.addEventListener('click', e => {
  e.preventDefault()
  const characterNumber = numberBoxNumber.value
  const uppercaseVal = uppercaseElement.checked
  const lowercaseVal = lowercaseElement.checked
  const symbolsVal = symbolsElement.checked
  const numbersVal = numbersElement.checked
  const password = generatePassword(characterNumber, uppercaseVal, lowercaseVal, symbolsVal, numbersVal)
  passwordShow.innerText = password
  console.log(password)
});


// my function to generate the password which includes all my different variables 
function generatePassword(characterNumber, uppercaseVal, lowercaseVal, symbolsVal, numbersVal) {
  let password = '';

  const valCount = lowercaseVal + uppercaseVal + numbersVal + symbolsVal;

  let charPass = [];
  if (uppercaseVal) charPass = charPass.concat(UPPERCASE_CHAR)
  if (lowercaseVal) charPass = charPass.concat(LOWERCASE_CHAR)
  if (symbolsVal) charPass = charPass.concat(SYMBOLS_CHAR)
  if (numbersVal) charPass = charPass.concat(NUMBERS_CHAR)

  if(valCount === 0) {
    return 'Please select atlease one option 👻';
  }
  
  const passwordCharacters = []
  for (let i = 0; i < characterNumber; i++) {
    const characterCode = charPass[Math.floor(Math.random() * charPass.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

// my array loop which counts from low number to high number (from a range) to gather the expected values for each character code set
function arrayFromLowToHigh(low, high) {
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
