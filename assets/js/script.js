// input types and linking them in js
const characterSliderRange = document.getElementById('characterSliderRange')
const numberBoxNumber = document.getElementById('numberBoxNumber')

// all my checkboxes and linking them to a varible
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
  // varible to be able to select the password and perform a command on it
  const textOutput = document.getElementById('passwordShow')

  // command to select the password and copy it to te clipboard
  textOutput.select();
  document.execCommand('copy');

  // an alert box allowing the individual to be notified when the password has been copied
  window.alert("You have successfully copied your UNIQUE password to your clipboard 📋")
})

// creating arrays for the special characters so i dont have to manually type each code, i can just convert the ASII code to the actual character
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

// linking my slider and number so they both have the same value allowing the process to move a lot smoother than have two different values which would break the code
characterSliderRange.addEventListener('input', linkCharacters)
numberBoxNumber.addEventListener('input', linkCharacters)

// checking for the users input values for the password length and a boolean if checkboxes have been checked
button.addEventListener('click', e => {
  const characterNumber = numberBoxNumber.value
  const uppercaseVal = uppercaseElement.checked
  const lowercaseVal = lowercaseElement.checked
  const symbolsVal = symbolsElement.checked
  const numbersVal = numbersElement.checked

  // creating a variable callled password which is equal to the function generatePassword
  const password = generatePassword(characterNumber, uppercaseVal, lowercaseVal, symbolsVal, numbersVal)

  // printing the generated password into the html so users can see/ use it
  passwordShow.innerText = password
});


// my function to generate the password which includes all my different variables/ user inputs 
function generatePassword(characterNumber, uppercaseVal, lowercaseVal, symbolsVal, numbersVal) {
  // setting the value of the password to nothing so i can concat the varible charPass to 
  let password = '';

  // setting a value so users can't create a password with no inputs selected
  const valCount = lowercaseVal + uppercaseVal + numbersVal + symbolsVal;

  // this checks if users have checked the checkboxes if true it concats the random value generated into the array
  let charPass = [];
  if (uppercaseVal) charPass = charPass.concat(UPPERCASE_CHAR)
  if (lowercaseVal) charPass = charPass.concat(LOWERCASE_CHAR)
  if (symbolsVal) charPass = charPass.concat(SYMBOLS_CHAR)
  if (numbersVal) charPass = charPass.concat(NUMBERS_CHAR)

  // checking if the varible is unchecked, if all checkboxes are unchecked this message will be displayed
  if(valCount === 0) {
    return 'Please select atlease one option 👻';
  }
  
  // loop to convert the password with ASII characters to actual characters.
  const passwordCharacters = []
  for (let i = 0; i < characterNumber; i++) {
    const characterCode = charPass[Math.floor(Math.random() * charPass.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }

  // returns the converted output into passwordCharacters which is stored into an array which will be passed through the variable
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
