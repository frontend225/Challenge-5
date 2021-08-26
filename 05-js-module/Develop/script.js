// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
// This variable is to give the user options for password character length
var length= parseInt(
  prompt( 'How many characters would you like in your password?')
);

// Conditional statement: password length must be a number. User cannot proceed until compliant with this statement.
if (isNaN(length) === true) {
  alert('Must input a number for password');
return;
}
// Conditional statement: password must have at least 9 characters. If false, user cannot proceed until compliant.
if (length < 10) {
alert('Password must contain at least 9 characters');
return;
}

// Conditional statement: password must have no more than 128 characters. If false, user cannot proceed until compliant.
if (length > 64) {
  alert('Password must contain less than 65 characters');
return;
}

// Variable to include special characters
 var hasSpecialCharacters = confirm(
 'Click Ok to include special characters'
 );

// Variable to include numbers
var hasNumericCharacters = confirm(
  'Click Ok to include numeric characters'
);

// Variable to include uppercase letters
var hasUpperCasedCharacters = confirm(
  'Click Ok to include uppercase letters'
);

// Variable to include lowercase letters
var hasLowerCasedCharacters = confirm(
  'Click Ok to include lowercase letters.'
);

// Variable that if user doesn't select Ok for all 4 conditional statements, then won't generate password/proceed
if (
  hasSpecialCharacters === false &&
  hasNumericCharacters === false &&
  hasUpperCasedCharacters === false &&
  hasLowerCasedCharacters === false
) {
  alert ('Must choose at least one of the characters')
  return;
}

// User input storage
var passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters
};

return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() *arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
var options= getPasswordOptions();
// Variable to store password while it's being put together
var result= [];

// Array to store password character types
var possibleCharacters = [];

// Array to include each individual character type
var guaranteedCharacters = [];

// Conditional statement that combines characters
// Push randomly generated special characters to guaranteed Characters.
if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters));
}

// Conditional statement that combines characters
// Push randomly generated special characters to guaranteed Characters.
if (options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // Conditional statement that combines characters
  // Push randomly generated lower case characters to guaranteed Characters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

// Conditional statement that combines characters
// Push randomly generated upper case characters to guaranteed Characters
if (options.hasUpperCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters));
}

// Code that will enable the loop
for (var i = 0; i <options.length; i++) {
var possibleCharacter = getRandom(possibleCharacters);

result.push(possibleCharacter);
}

// Incorporate guaranteed Characters into the password
for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}

// Puts all elements into a string
return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
