// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create arrays for possible characters by category
// Lowercase letters

// Uppercase letters

// Numeric characters

// Special characters

// Select length of password

// Error message when password is not between 8 and 128 characters in length

// Ask about lowercase

// Ask about uppercase

// Ask about numeric

// Ask about special

// Formula to make password

// Validate password contents

// Print password