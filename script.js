//Assignment code.
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //1. Prompt the user for the password criteria.
  //  a. Password length 8 and 128
  var passwordLength = prompt ("How many characters would you like your password to contain?");
  if(passwordLength < 8 || passwordLength > 128){
    //Leave the code if length is not between 8 and 128. Let user know so in the password generate area.
    return "Invalid entry. Please choose between 8 and 128 characters.";
  };
  console.log("The password length will be " + passwordLength);

  //  b. Lowercase, uppercase, numbers, special characters.
  //Ask the user if they want their password to comprise of the following.
  var specialCharacters = confirm ("Do you want to include special characters?");
  console.log("SpecialCharacters = " + specialCharacters);

  var numericCharacters = confirm ("Do you want to include numbers?");
  console.log("NumericCharacters = " + numericCharacters);

  var lowercaseCharacters = confirm ("Do you want to include lowercase letters?");
  console.log("LowercaseCharacters = " + lowercaseCharacters);

  var uppercaseCharacters = confirm ("Do you want to include uppercase letters");
  console.log("UppercaseCharacters = " + uppercaseCharacters);

  //2. Validate the input.
  //If the users answers from the previous questions are true, fill the variables with the character library.
  //Special characters.
  if (specialCharacters === true ){
    SpecialCharactersValues = "`~!@#$%^&*()_+-={}[]|:;'<,>.?/";
  } else {
    SpecialCharactersValues = ""
  }
  console.log("SpecialCharactersValues = " + SpecialCharactersValues);

  //Numeric characters.
  if (numericCharacters === true){
    NumericCharactersValues = "1234567890"
  } else {
    NumericCharactersValues = ""
  }
  console.log("NumericCharactersValues = " + NumericCharactersValues);

  //Lowercase characters.
  if (lowercaseCharacters === true){
    LowercaseCharactersValues = "abcdefghijklmnopqrstuvwxyz";
  } else {
    LowercaseCharactersValues = ""
  }
  console.log("LowercaseCharactersValues = " + LowercaseCharactersValues);

  //Uppercase characters.
  if (uppercaseCharacters === true){
    UppercaseCharactersValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else {
    UppercaseCharactersValues = ""
  }
  console.log("UppercaseCharactersValues = " + UppercaseCharactersValues);

  //3. Generate password base on criteria.
  var password = "";
  var characters = SpecialCharactersValues + NumericCharactersValues + LowercaseCharactersValues + UppercaseCharactersValues
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  //4. Display passsword to the page.
  return password;
}

//Write password to the #password input.
function writePassword() {
  var password = generatePassword();//make function
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);