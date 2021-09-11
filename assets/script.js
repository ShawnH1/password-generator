// Assignment code here
var enter;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSpecialCharacters;

//Is there an easier way of generating a random letter.
//Edit: Might change it to a string that has all of the letters and then pull a random character from that array
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//I just used the symbols above the top numbers on the keyboard.
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//number generator
//This should generate a random number between 1 and 10.
//It does this by picking a number between 0 and 0.9999...
// Then it multiplies that number by 10.
//example 0.12 would become 1.2 and 0.92 would become 9.2.
//Then Math.floor gets rid of the integer.
//1.2 would become 1 and 9.2 would become 9 
number = let= Math.floor(Math.random() * 10);

// converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase():
};

//variable for user inpute
var choices;
// Get references to the #generate element
var make = document.querySelector("#generate");

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPass();
}

//When user clicks "Generate"
function generatePassword() {
  enter = parseInt(window.prompt("Please pick how long you want the password.  It can be between 8 and 128 characters."));
  //Did they actually type anything?
  if (!enter) {
    alert("Please type a valid input, a number between 8 and 128!")
  } else if (enter < 8 || enter > 128) {
    //Did they put in a valid response?  If so, continue to ask them for more details about their password
    enter = parseInt(prompt("Please type a valid input, a number between 8 and 128!"))
  }else {
    confirmUpperCase = window.confirm("Do you want the password to contain uppercase letters?");
    confirmLowerCase = window.confirm("Do you want the password to contain lowercase letters as well?");
    confirmSpecialCharacters = window.confirm("Do you want special characters as well such as !@# ?");
    confirmNumber = window.confirm("Do you want this to contain numbers?")
  }
}



// Write password to the #password input
function (UserInput(pass).text
  document.getElementById("password").textContent = ps
}

// Add event listener to generate button
get.addEventListener("click", function () {
  pass = generatePassword();
  document.getElementbyId(".password").placeholder = password;

};



//provides "copy" functionality
function copyPass() {
  document.getElementbyId(".password").select();
  document.execCommand("Copy");
  window.alert("Your password has been copied!")
}
