// Assignment Code

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //Here I put together the function generatePassword:
  function generatePassword() {
    //Here my function will ask user for characters lenght in a prompt.  Also checking if input was a number:
    var passLenght = parseInt(prompt("How many characters would you like for your password?"))
    if (isNaN(passLenght) || passLenght < 8) {
      alert("Please enter a valid number equal or greater than 8")
      return;
    }
    if (isNaN(passLenght) || passLenght > 128) {
      alert("Please enter a valid number equal or less than 128")
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

    //Here my function will combine the character sets based on user preference:
    var allChars = lowercaseChars;
    if (includeUppercase) {allChars += uppercaseChars};
    if (includeNumbers) {allChars += numberChars};
    if (includeSpecialChars) {allChars += specialChars};

    //Here my function will generate the random password with help from this for loop, and return the password:
    var password = "";
    for (var i = 0; i < passLenght; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }

    return password;
  }

  //Here the generated password will be displayed in the text area:
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);