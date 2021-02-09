// Assignment Code
var generateBtn = document.querySelector("#generate");

// creating character variables
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';;
var numbers = '0123456789';
var special = '`~!@#$%^&*()_-+=,.<>/?;:';

var randomPass = "";

var generatePassword = function () {
  // declaring length prompt and converting to a number
  var charLength = Number(prompt('Choose a desired character length between 8 and 128?'));

  //  if charLength is bewteen 8 and 128,
  if (charLength > 7 && charLength < 129) {


    // confrim character type to be used in password
    var lowerChar = confirm('Would you like to include lowercase?');
    var upperChar = confirm('Would you like to include uppercase?');
    var numberChar = confirm('Would you like to include numbers?');
    var specialChar = confirm('Would you like to include special characters?');

    // if no character type selected
    if (!lowerChar && !upperChar && !numberChar && !specialChar) {
      // then alert to restart and choose one
      alert('Please select at least one character type. Press "Generate Password" to restart.')
    }
    
    // setting character variations to be used for password
    var charA = lowerCase + upperCase + numbers + special; // done
    var charB = lowerCase + upperCase + numbers; // done
    var charC = lowerCase + upperCase + special; // done
    var charD = lowerCase + special + numbers;
    var charE = special + upperCase + numbers;
    var charF = lowerCase + upperCase;
    var charG = lowerCase + numbers;
    var charH = lowerCase + special;
    var charI = upperCase + numbers;
    var charJ = upperCase + special;
    var charK = numbers + special;
    var charL = lowerCase;
    var charM = upperCase;
    var charN = numbers;
    var charO = special;

    // 
    if (lowerChar && upperChar && numberChar && specialChar) {
      console.log(charA)
      for (var i = 0; i < charLength; i++) {
        randomPass += charA.charAt(Math.floor(Math.random() * charA.length));
      }
      console.log(randomPass);
      return randomPass;
    } else if (lowerChar && upperChar && numberChar && !specialChar) {
      console.log(charB)
      for (var i = 0; i < charLength; i++) {
        randomPass += charB.charAt(Math.floor(Math.random() * charB.length));
      }
      console.log(randomPass);
      return randomPass;
    } else if (lowerChar && upperChar && !numberChar && specialChar) {
      console.log(charC)
      for (var i = 0; i < charLength; i++) {
        randomPass += charC.charAt(Math.floor(Math.random() * charC.length));
      }
      console.log(randomPass);
      return randomPass;
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
