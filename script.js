// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = lowerCase.toUpperCase();
var numbers = Math.floor(Math.random() * 10);
var special =  '`~!@#$%^&*()_-+=,.<>/?;:';

var generatePassword = function () {
  // declaring length prompt and converting to a number
  var length = Number(prompt('Choose a desired character length between 8 and 128?'));

  //  if length is bewteen 8 and 128,
  if (length > 7 && length < 129) {
    // then declare character type confirm variables
    var lowerChar = confirm('Would you like to include lowercase?');
    var upperChar = confirm('Would you like to include uppercase?');
    var numberChar = confirm('Would you like to include numbers?');
    var specialChar = confirm('Would you like to include special characters?');

      // if no character type selected
    if (!lowerChar && !upperChar && !numbersChar && !specialChar) {
      // then alert to restart and choose one
      alert('Please select at least one character type. Press "Generate Password" to restart.')
    }
  } else {
    // then alert restart and choose a number between 8 and 128
    alert('Please choose a length bewteen 8 and 128.  Press "Generate Password" to restart.');
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
