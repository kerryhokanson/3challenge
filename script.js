// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var numericArray  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  


  passwordText.value = password;

}

//write generate passwork function
function generatePassword(){

possibleCharacters = [];
passwordArray = [];

length = prompt("choose a passwork length between 8 and 128");
if(/*(length.typeof != number) || */ (length < 8 || length > 128)){
  alert("length of password must be at least 8 characters long and at most 128 characters long");
  generatePassword();
}
lower = confirm("include lowercase characters?\nselect OK for yes, cancel for no");
upper = confirm("include uppercase characters?\nselect OK for yes, cancel for no");
numeric = confirm("include numeric characters?\nselect OK for yes, cancel for no");
special = confirm("include special characters?\nselect OK for yes, cancel for no");
if((!lower && !upper && !numeric && !special)){
  alert("at least 1 character type must be chosen");
  generatePassword();
}


if (lower){
  possibleCharacters = possibleCharacters.concat(lowercaseArray);
}
if (upper){
  possibleCharacters = possibleCharacters.concat(uppercaseArray);
}
if (numeric){
  possibleCharacters = possibleCharacters.concat(numericArray);
}
if (special){
  possibleCharacters = possibleCharacters.concat(specialCharArray);
}

for(i=0; i < length; i++){
passwordArray[i] = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
}

password = passwordArray.join("");

return password;
}




// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
