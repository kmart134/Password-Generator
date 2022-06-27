var generateBtn = document.querySelector("#generate"); 




function generatePassword(){

var letters="abcdefghijklmnopqrstuvwxyz";
var specialCharacters="`~!@#$%^&*()_+-={}[]|:;'<,>.?/";
var numbers= "1234567890"
var upperLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var characters;

// )

// if( confirm(specialCharacters)===true){
//   console.log("you picked yes")}


// var lowerCase= confirm("Do you want to include lowercase letters?")

// if( confirm(lowerCase)===true){
//   console.log("you picked yes")}



// How to collect information input?

// var upperCase= confirm("Do you want to include uppercase letters?")

// if( confirm(upperCase)===true){
//   console.log("you picked yes")
//   }

function characterLength (){
  characters= prompt("How many characters would you like your password to contain 8-128?");
  while(characters<8 || characters >128){
    alert ("Invalid entry. Please choose between 8 and 128 characters.");
      characterLength();
    
   }
   
   }

function characterTypes(){
  var character2=confirm("Do you want to include special characters?");
  // var lowerCase=confirm("Do you want to include lowercase letters?");
  var upperCase=confirm ("Do you want to include uppercase letters?");
  var number= confirm ("Do you want to use numbers?");
  while(character2 === false && lowerCase === false && upperCase === false && number === false) {
    alert("Invalid Entry. Please pick one.");
    characterTypes();}
  var result='';
  if(character2=== true){
      letters= letters + specialCharacters;
    }
  if(upperCase===true){
      letters= letters + upperLetters;
    }
  if (number===true){
      letters= letters + numbers;
      console.log(letters);
    }
  var lettersLength= letters.length;
    console.log(lettersLength);
}

for(var i=0; i<characters; i++){
  result += letters.chartAt(Math.floor(Math.random()* lettersLength));
}

// var text = document.getElementbyId ("password");
// text.textContent = result
characterLength();
characterTypes();
}








//acording user input, we will reach into array and output password



function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var text = document.querySelector ('#password');
  

passwordText.textContent = result
return result;  

passwordText.value = password;
}


var password = generatePassword();
var passwordText = document.querySelector("#password");
  
// writePassword();
// passwordText.value = password;


//   for( var i=0; i<characters; i++);
//   return String. characters(Math.floor(Math.random()));
// }

generateBtn.addEventListener("click", generatePassword);






//3. Generate password based on criteria- to gena



//4. diplay password on the page. almost done!
//  return "Generated Password will be here!";
// }

// // Write password to the #password input
// function writePassword() {
  // var password = generatePassword();//make function
  // var passwordText = document.querySelector("#password");



//   passwordText.value = password;


