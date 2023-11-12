/* Temporarly making original code as Note --

// Assignment Code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

-- Temporarly making original code as Note */

// my trials
document.querySelector("#generate").addEventListener("click", generatePassword);

function generatePassword() {
  var passLenght = parseInt(prompt("How many characters would you like your password to be?"));
  if (isNaN(passLenght) || passLenght <= 0) {
    alert("Please enter a valid number greater than 0");
    return;
  }

  var includeUppercase = confirm("Would you like UPPERCASE letters?");
  var includeSpecialChars = confirm("Would you like special characters?");
  var includeNumbers = confirm("Would you like numbers?");
};
