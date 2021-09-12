var passwordText = document.querySelector("#password");

//A list of all of different possible options for characters to be added into the password.
var specialArray = ["!", "@","$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//passwordArray currently left empty as it will be filled with the different characters after the quantity is selected.
var passwordArray = [];


function generatePassword(){
  var userInput2
  var userInput2 = parseInt( prompt("Please pick a length for your password between 8 and 126 characters long"));

  
  if (isNaN (userInput2)) {
    alert("Please enter a number between 8 and 126!");
    return
  }


if (userInput2 < 8 || userInput2 > 126) {
  alert("Please input a value between 8 and 126.");
  return
}

//Asking the user for the parameters of their password
var specialCharacters = confirm("Would you like special characters like '!', '@', and '#' to be included? in your password?");
var numericValues = confirm("Would you like numbers to be included in your password?");
var lowercaseValues = confirm("Would you like lower case letters in your password?");
var uppercaseValues = confirm("Woul you like upper case letters in your password?");

//If the user rejected all possibilities for characters in the password, inform them of the issue and return them to the list of options.
if (!specialCharacters && !numericValues && !lowercaseValues && !uppercaseValues) {
  alert ("Please pick at least one condition.  You will now be returned to the list of options for conditions.");
  return
}

//check for userInput2, useful for debugging in the future if there are issues.
console.log(userInput2)

//Puts the character options the user has selected into the password array
//This one is for special characters such as !@#
if (specialCharacters){
  for (var i = 0; i < specialArray.length; i++){
    const element = specialArray[i]
    passwordArray[passwordArray.length] = element
  }
}

//This one is for numbers such as 123...
if (numericValues){
  for (var i = 0; i < numericValues.length; i++){
    const element = numericValues[i]
    passwordArray[passwordArray.length] = element
  }
}

//this one is for lower case letters such as abc...
if (lowercaseValues){
  for (var i = 0; i < lowercaseValues.length; i++){
    const element = lowercaseValues[i]
    passwordArray[passwordArray.length] = element
  }
}

//this one is for upper case letters such as ABC...
if (uppercaseValues){
  for (var i = 0; i < uppercaseValues.length; i++){
    const element = uppercaseValues[i]
    passwordArray[passwordArray.length] = element
  }
}
  var passPhrase = "";
  
  for (let i = 0; i < userInput2; i++) {
    var finalPassword = passwordArray[Math.floor(Math.random()* passwordArray.length)]
      passPhrase += finalPassword
  }

  return passPhrase
}
//temporary holding space for the password characters to be held
var passPhrase = "";

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//This puts the password in the #password space
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);