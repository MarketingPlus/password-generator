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

// allows users to copy the password to clipboard 
const clipboard = document.getElementById('passwordShow')


const randomVal = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
}

clipboard.addEventListener('click', () => {
  const textarea = document.getElementsByClassName('clipboard');
  const password = passwordShow.innerText;

  if(!password) {return; }

  textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
}







// creating arrays for the special characters so i dont have to manually type each code i can justr convert the code number to character
const UPPERCASE_CHAR = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR = arrayFromLowToHigh(97, 122);
const SYMBOLS_CHAR = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)
const NUMBERS_CHAR = arrayFromLowToHigh(48, 57)

// my array loop which counts from low number to high number (from a range) to gather the expected values for each character code set
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// linking my slider and number so they both have the same value
characterSliderRange.addEventListener('input', linkCharacters)
numberBoxNumber.addEventListener('input', linkCharacters)

// My function to link both the slider and number box together ensuring they both have the same values
function linkCharacters(e) {
  const value = e.target.value
  characterSliderRange.value = value
  numberBoxNumber.value = value
}
// var generateBtn = document.querySelector("#generate");function writePassword() {var password = generatePassword();var passwordText = document.querySelector("#password");passwordText.value = password;}generateBtn.addEventListener("click", writePassword);
