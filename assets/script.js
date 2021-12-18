// Create arrays for possible characters by category
// Lowercase letters
var lowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Uppercase letters
var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Numeric characters
var numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Special characters
var speChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~', '`', '?', ';', ':', ',', '.', '[', ']', '{', '}', '/', '+', '=', '-'];

// Select length of password
var length = parseInt(prompt('How many characters would you like your password to contain?'));

// Error message when password is not between 8 and 128 characters in length
if(length < 8) {
  alert('Password must have at least 8 characters.');
  return null;
} else if(length > 128) {
  alert('Password cannot be longer than 128 characters.');
  return null;
} else {
  length = length;
}

// Ask about lowercase
var hasLowChars = confirm('Would you like to include lowercased characters? Click OK to confirm.');

// Ask about uppercase
var hasUpChars = confirm('Would you like to include uppercased characters? Click OK to confirm.');

// Ask about numeric
var hasNumChars = confirm('Would you like to include numerical characters? Click OK to confirm.');

// Ask about special
var hasSpeChars = confirm('Would you like to include special characters? Click OK to confirm.');

// Verify that there is at least one option selected
if(hasLowChars === false && hasUpChars === false && hasNumChars === false && hasSpeChars === false) {
  alert('Password must contain at least one character type.');
  return null;
}

// Formula to make password

// Validate password contents

// Assignment Code (starting code)
var generateBtn = document.querySelector("#generate");

// Print password
// Write password to the #password input (starting code)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (starting code)
generateBtn.addEventListener("click", writePassword);