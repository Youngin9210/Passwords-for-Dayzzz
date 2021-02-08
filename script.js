// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  
  var chars = function(){
    var length = Number(prompt('Choose a desired character length between 8 and 128?'));
    if (length > 7 && length < 129) {
      return;
    } else {
      chars();
    }
  }
  chars();

  
  var lowercase = confirm('Would you like to include lowercase?');
  var uppercase = confirm('Would you like to include uppercase?');
  var numbers = confirm('Would you like to include numbers?');
  var special = confirm('Would you like to include special characters?');

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
