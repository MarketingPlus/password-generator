const characterSliderRange = document.getElementById('characterSliderRange')
const numberBoxNumber = document.getElementById('numberBoxNumber')

characterSliderRange.addEventListener('input', linkCharacters)
numberBoxNumber.addEventListener('input', linkCharacters)

function linkCharacters(e) {
  const value = e.target.value
  characterSliderRange.value = value
  numberBoxNumber.value = value
}


var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
