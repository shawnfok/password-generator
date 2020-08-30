
// Lowercase letters
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase letters
upper = lower.toUppercase();
// Numeric characters
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special characters 
special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "{", "|", "}", "~"];



// Assignment Code
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

function generatePassword() {
  // Asks for legth of selection from user
  var lengthChoice = parseInt(prompt("How long would you like your password be? Choose between 8 and 128 characters."));

  // First if statement for user validation 
  if (!lengthChoice) {
    alert("This needs a value");

  } else if (lengthChoice < 8 || lengthChoice > 128) {
    lengthChoice = parseInt(prompt("Opps! You must choose between 8 and 128 characters."));

  } else {
    // Continues once length of choice is validated
    confirmLowercase = confirm("Will this include lowercase letters?");
    confirmUppercase = confirm("Will this include uppercase letters?");
    confirmNumber = confirm("Will this include numbers?");
    confirmSpecial = confirm("Will this include special characters?");
  };

  // Else if for all 4 negative options
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecial) {
    choices = alert("Opps! You must choose at least one criteria.");

    // Else if for all 4 positive options
    else if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecial) {

      choices = lower.concat(upper, number, special);
    }

    // Else if for 3 positive options
    else if (confirmLowercase && confirmUppercase && confirmNumber) {
      choices = lower.concat(upper, number);
    }
    else if (confirmLowercase && confirmUppercase && confirmSpecial) {
      choices = lower.concat(upper, special);
    }
    else if (confirmLowercase && confirmNumber && confirmSpecial) {
      choices = lower.concat(number, special);
    }
    else if (confirmUppercase && confirmNumber && confirmSpecial) {
      choices = upper.concat(number, special);
    }

    // Else if for 2 positive options
    else if (confirmLowercase && confirmUppercase) {
      choices = lower.concat(upper);
    }
    else if (confirmLowercase && confirmNumber) {
      choices = lower.concat(number);
    }
    else if (confirmLowercase && confirmSpecial) {
      choices = lower.concat(special);
    }
    else if (confirmUppercase && confirmNumber) {
      choices = upper.concat(number);
    }
    else if (confirmUppercase && confirmSpecial) {
      choices = upper.concat(special);
    }
    else if (confirmNumber && confirmSpecial) {
      choices = number.concat(special);
    }

    // Else if for 1 positive options
    else if (confirmLowercase) {
      choices = lower;
    }
    else if (confirmUppercase) {
      choices = upper;
    }
    else if (confirmNumber) {
      choices = number;
    }
    else if (confirmSpecial) {
      choices = special;
    }

    var password = [];

    // Random selection 
    for (var i = 0; i < lengthChoice; i++) {
      var mixedChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(mixedChoices);
    }
  
    var pw = password.join("");
    UserInput(pw);
    return pw;
  }

  function UserInput(pw) {
    document.getElementById("password").textContent = pw;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
