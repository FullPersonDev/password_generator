// Assignment Code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Here my function will ask user for characters lenght in a prompt.  Also checking if input was a number:
  var passLenght = parseInt(prompt("How many characters would you like for your password?"))
  if (isNaN(passLenght) || passLenght <= 0) {
    alert("Please enter a valid number and greater than 0")
    return;
  }

  //Here my function will ask user 3 questions in a confirm, and store them as variables:
  var includeUppercase = confirm("Would you like UPPERCASE letters?");
  var includeNumbers = confirm("Would you like numbers?");
  var includeSpecialChars = confirm("Would you like special characters?");

  //Here my function defines the character sets, and stores them in as variables:
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*";

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);