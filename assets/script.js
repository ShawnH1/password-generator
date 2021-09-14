var passwordText = document.querySelector("#password");

//A list of all of different possible options for characters to be added into the password.
var specialArray = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//passwordArray currently left empty as it will be filled with the different characters after the quantity is selected.
var passwordArray = []; 


function generatePassword() {
  var userInput2

  //This asks the user to put in a number to determine the length of their password.
  var userInput2 = parseInt(prompt("Please pick a length for your password between 8 and 126 characters long"));

  //This checks if the user input was not a number.
  if (isNaN(userInput2)) {
    alert("We apologize for the inconvenience but this generator requires a number between 8 and 126.  You will now be returned that choice.  Please type in a number in that range.");
    return
  }

  //This makes sure that the number selected by the user is in the range of 8 and 126.
  if (userInput2 < 8 || userInput2 > 126) {
    alert("We apologize for the inconvenience but this generator can only make passwords between 8 and 126 characters.  You will now be returned to that option.  Please input a value between 8 and 126.");
    return
  }

  //Asking the user for the parameters of their password
  var specialCharacters = confirm("Would you like special characters like '!', '@', and '#' to be included? in your password?");
  var numericValues = confirm("Would you like numbers to be included in your password?");
  var lowerCaseValues = confirm("Would you like lower case letters in your password?");
  var upperCaseValues = confirm("Woul you like upper case letters in your password?");

  //If the user rejected all possibilities for characters in the password, inform them of the issue and return them to the list of options.
  if (!specialCharacters && !numericValues && !lowerCaseValues && !upperCaseValues) {
    alert("We apologize for the inconvenience but it appears you did not select any options for you password. You will now be returned to the list of options for conditions now.  Please pick at least one.  Thank you for your understanding and have a nice day!");
    return
  }

  //check for userInput2, useful for debugging in the future if there are issues.
  console.log(userInput2)

  //Puts the character options the user has selected into the password array
  //This one is for special characters such as !@#
  if (specialCharacters) {
    for (var i = 0; i < specialArray.length; i++) {
      const element = specialArray[i]
      passwordArray.push(element)
    }
  }

  //This one is for numbers such as 123...
  if (numericValues) {
    for (var i = 0; i < numberArray.length; i++) {
      const element = numberArray[i]
      passwordArray.push(element)
    }
  }

  //This one is for lower case letters such as abc...
  if (lowerCaseValues) {
    for (var i = 0; i < lowerArray.length; i++) {
      const element = lowerArray[i]
      passwordArray.push(element)
    }
  }

  //This one is for upper case letters such as ABC...
  if (upperCaseValues) {
    for (var i = 0; i < upperArray.length; i++) {
      const element = upperArray[i]
      passwordArray.push(element)
    }
  }
  var passPhrase = "";

  //This keeps randomly selecting random characters from those available until the password
  // reaches the length selected by the user (userInput2) which they were asked for at the beginning.
  for (let i = 0; i < userInput2; i++) {
    var finalPassword = passwordArray[Math.floor(Math.random() * passwordArray.length)]
    passPhrase += finalPassword
  }

  return passPhrase
}
//temporary holding space for the password characters to be held
var passPhrase = "";

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//This puts the password in the #password space
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button.  This is VERY important!  Do not break it or nothing else will work!
//I repeat "Do NOT break this button!"
generateBtn.addEventListener("click", writePassword);