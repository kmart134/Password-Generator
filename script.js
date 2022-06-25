 // Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

function generatePassword(){
 console.log("Test");
}
var characters= prompt("How many characters would you like your password to contain?")

 if (characters< 8 || characters> 128){
  alert ("Invalid entry. Please choose between 8 and 128 characters.");
if (alert=true);
prompt("How many characters would you like your password to contain?");
 }

// How to collect information input?

var specialCharacters=confirm("Do you want to include special characters?")

if( confirm(specialCharacters)===true){
  console.log("you picked yes")}


else( confirm(specialCharacters)!== true)
  console.log("you picked false");

// How to collect information input?

var lowerCase= confirm("Do you want to include lowercase letters?")

if( confirm(lowerCase)===true){
  console.log("you picked yes")}

else( confirm(lowerCase)!== true)
  console.log("you picked false");

// How to collect information input?

var upperCase= confirm("Do you want to include uppercase letters?")

if( confirm(upperCase)===true){
  console.log("you picked yes")
  }

else( confirm(upperCase)!== true)
  console.log("you picked false");

// How to collect information input?


//Array of Letters and special characters? Should Numbers be in array?
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var characters=["!","#","$","%","&","'","(",")","*","+",",","-",".","<",">","?","@","[","]","/","^","_","`","{","}","~"];
//acording user input, we will reach into array and output password




//1. prompt user for password criteria
  //length of password  between 8 -128
  //include special characters
  //include lowercase or uppercase
//2. validate input to ensure charater length is between 8-128 and ensure character type is selceted
//3. Generate password based on criteria- to gena



//4. diplay password on the page. almost done!
 return "Generated Password will be here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//make function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
