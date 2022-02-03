// Create arrays for possible characters by category
// Lowercase letters
var lowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Uppercase letters
var upLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Numeric characters
var numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Special characters
var speChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~', '`', '?', ';', ':', ',', '.', '[', ']', '{', '}', '/', '+', '=', '-'];


// password option input function
function askUser() {
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
  var choiceLowLetters = confirm('Would you like to include lowercase characters? Click OK to confirm.');

  // Ask about uppercase
  var choiceUpLetters = confirm('Would you like to include uppercase characters? Click OK to confirm.');

  // Ask about numeric
  var choiceNumChars = confirm('Would you like to include numerical characters? Click OK to confirm.');

  // Ask about special
  var choiceSpeChars = confirm('Would you like to include special characters? Click OK to confirm.');

  // Verify that there is at least one option selected
  if(choiceLowLetters === false && choiceUpLetters === false && choiceNumChars === false && choiceSpeChars === false) {
    alert('At least one option must be selected. Please try again');
    return null;
  };

  // return an object with user's choices
  var userObject = {
    length: length,
    choiceLowLetters: choiceLowLetters,
    choiceUpLetters: choiceUpLetters,
    choiceNumChars: choiceNumChars,
    choiceSpeChars: choiceSpeChars,
  };

  return userObject;
}

// Function to make password
function generatePassword() {
  // Object holding users choices from function
  var userChoices = askUser();

  // Variable to hold the array with all possible arrays
  var possibleChar = [];

  // Variable to hold the array with all the selected items from the failsafe
  var selectChar = [];

  // Variable to hold the array with all the randomly selected items
  var selectRand = [];

  // Variable to hold the array with the final password
  var finalChars = [];

  // Conditional statements to combine arrays that are selected and those that are not
  if(userChoices.choiceLowLetters === true) {
    possibleChar = possibleChar.concat(lowLetters);
    // get one random and put it in the final selection to guarantee that at least one of each type is in the final array
    let rand = Math.floor(Math.random() * lowLetters.length);
    let randLow = lowLetters[rand];
    selectChar.push(randLow);
  }

  if(userChoices.choiceUpLetters === true) {
    possibleChar = possibleChar.concat(upLetters);

    let rand = Math.floor(Math.random() * upLetters.length);
    let randUp = upLetters[rand];
    selectChar.push(randUp);
  }

  if(userChoices.choiceNumChars === true) {
    possibleChar = possibleChar.concat(numChars);

    let rand = Math.floor(Math.random() * numChars.length);
    let randNum = numChars[rand];
    selectChar.push(randNum);
  }

  if(userChoices.choiceSpeChars === true) {
    possibleChar = possibleChar.concat(speChars);

    let rand = Math.floor(Math.random() * speChars.length);
    let randSpe = speChars[rand];
    selectChar.push(randSpe);
  }
  
  // Loop to take random character from possibleChar to selectChar for the length of the password minus the length of the array that is 
  for(let i = 0; i < (userChoices.length - selectChar.length); i++) {
    let rand = Math.floor(Math.random() * possibleChar.length);
    let randAll = possibleChar[rand];
    selectRand.push(randAll);
  }

  // Combines the two selected arrays so that the final password has the appropriate number of characters and is guaranteed one of each character
  finalChars = selectRand.concat(selectChar);

  // stringify array for return
  return finalChars.join('');
}

// Assignment Code (starting code)
var generateBtn = document.querySelector("#generate");

// Print password function
// Write password to the #password input (starting code)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (starting code)
generateBtn.addEventListener("click", writePassword);