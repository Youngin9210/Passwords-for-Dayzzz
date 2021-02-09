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
    var lowerChar = confirm('Would you like to include LOWERCASE? Click "Ok" for YES or "Cancel" for NO.');
    var upperChar = confirm('Would you like to include UPPERCASE? Click "Ok" for YES or "Cancel" for NO.');
    var numberChar = confirm('Would you like to include NUMBERS? Click "Ok" for YES or "Cancel" for NO.');
    var specialChar = confirm('Would you like to include SPECIAL CHARACTERS? Click "Ok" for YES or "Cancel" for NO.');

    // if no character type selected
    if (!lowerChar && !upperChar && !numberChar && !specialChar) {
      // then alert to restart and choose one
      alert('Please select at least one character type. Press "Generate Password" to restart.')
    }
    
    // setting character variations to be used for password
    var charA = lowerCase + upperCase + numbers + special; // if done
    var charB = lowerCase + upperCase + numbers; // if done
    var charC = lowerCase + upperCase + special; // if done
    var charD = lowerCase + special + numbers; // if done
    var charE = special + upperCase + numbers; // if done
    var charF = lowerCase + upperCase; // if done
    var charG = lowerCase + numbers; // if done
    var charH = lowerCase + special; // if done
    var charI = upperCase + numbers; // if done
    var charJ = upperCase + special; // if done
    var charK = numbers + special; // if done

    // if statements for all variations to return the password
    if (lowerChar && upperChar && numberChar && specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charA.charAt(Math.floor(Math.random() * charA.length));
      }
      return randomPass;
    } else if (lowerChar && upperChar && numberChar && !specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charB.charAt(Math.floor(Math.random() * charB.length));
      }
      return randomPass;
    } else if (lowerChar && upperChar && !numberChar && specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charC.charAt(Math.floor(Math.random() * charC.length));
      }
      return randomPass;
    } else if (lowerChar && !upperChar && numberChar && specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charD.charAt(Math.floor(Math.random() * charD.length));
      }
      return randomPass;
    } else if (!lowerChar && upperChar && numberChar && specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charE.charAt(Math.floor(Math.random() * charE.length));
      }
      return randomPass;
    } else if (lowerChar && !upperChar && numberChar && !specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charF.charAt(Math.floor(Math.random() * charF.length));
      }
      return randomPass;
    } else if (lowerChar && upperChar && !numberChar && !specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charG.charAt(Math.floor(Math.random() * charG.length));
      }
      return randomPass;
    } else if (lowerChar && !upperChar && !numberChar && specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charH.charAt(Math.floor(Math.random() * charH.length));
      }
      return randomPass;
    } else if (!lowerChar && upperChar && numberChar && !specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charI.charAt(Math.floor(Math.random() * charI.length));
      }
      return randomPass;
    } else if (!lowerChar && upperChar && !numberChar && specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charJ.charAt(Math.floor(Math.random() * charJ.length));
      }
      return randomPass;
    } else if (!lowerChar && upperChar && numberChar && !specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charI.charAt(Math.floor(Math.random() * charI.length));
      }
      return randomPass;
    } else if (!lowerChar && !upperChar && numberChar && specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += charK.charAt(Math.floor(Math.random() * charK.length));
      }
      return randomPass;
    } else if (lowerChar && !upperChar && !numberChar && !specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
      }
      return randomPass;
    } else if (!lowerChar && upperChar && !numberChar && !specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
      }
      return randomPass;
    } else if (!lowerChar && !upperChar && numberChar && !specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      return randomPass;
    } else if (!lowerChar && !upperChar && !numberChar && specialChar) {
      for (var i = 0; i < charLength; i++) {
        randomPass += special.charAt(Math.floor(Math.random() * special.length));
      }
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
