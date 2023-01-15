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
    var passwordLength = parseInt(prompt("How many characters would you like your password to contain? (Please choose between 10 and 64 characters)"));
    var hasSpecialCharacters = confirm("Click OK to confirm including special characters.");
    var hasNumericCharacters = confirm("Click OK to confirm including numeric characters.");
    var hasLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters.");
    var hasUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters.");
    var passwordOptions;

//     // validation for passwords's length 
//     while (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
//       alert("Please choose a number between 10 and 64");
//       passwordLength = parseInt(prompt("How many characters would you like your password to contain? (Please choose between 10 and 64 characters)"));
//     }

//     // validate that at least one character type is selected
//     while (!hasSpecialCharacters && !hasNumericCharacters && !hasLowerCasedCharacters && !hasUpperCasedCharacters) {
//       alert("Please select at least one character type.");
//       hasSpecialCharacters = confirm("Click OK to confirm including special characters.");
//       hasNumericCharacters = confirm("Click OK to confirm including numeric characters.");
//       hasLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters.");
//       hasUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters.");
//     }
//     passwordOptions = {
//       length: passwordLength,
//       hasSpecialCharacters: hasSpecialCharacters,
//       hasNumericCharacters: hasNumericCharacters,
//       hasLowerCasedCharacters: hasLowerCasedCharacters,
//       hasUpperCasedCharacters: hasUpperCasedCharacters
//     };
//     return passwordOptions;
//   }

//   // Function for getting a random element from an array
//   function getRandom(arr) {
//     var randIndex = Math.floor(Math.random() * arr.length);
//     var randElement = arr[randIndex];
//     return randElement;
//   }
      
//   // Function to generate password with user input
//   function generatePassword() {
//     var options = getPasswordOptions();
//     var possibleCharacters = [];
//     var result = [];
//     if (options.hasSpecialCharacters) {
//         possibleCharacters = possibleCharacters.concat(specialCharacters);
//     } 
//     if (options.hasNumericCharacters) { 
//         possibleCharacters = possibleCharacters.concat(numericCharacters);
//     }
//     if (options.hasLowerCasedCharacters) {
//         possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
//     }    
//     if (options.hasUpperCasedCharacters) {
//     possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
//     }
//     for (var i = 0; i < options.length; i++) {
//       var randomCharacter = getRandom(possibleCharacters);
//       result.push(randomCharacter);
//     }
//     return result.join('');
//   }
  
// //  Get references to the #generate element 
//   var generateBtn = document.querySelector('#generate');
            
//   // Write password to the #password input
//   function writePassword() {
//     // nothing needs to be changed inside of here
//     var password = generatePassword();
//     var passwordText = document.querySelector('#password');
              
//     passwordText.value = password;
//   }
              
//   // Add event listener to generate button
//   generateBtn.addEventListener('click', writePassword); // possible to switch out the function passed in - to test the functionality of the functions declared above
        


 
  