// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //   // var password = generatePassword();
  //   alert("Test");
  //   // var passwordText = document.querySelector("#password");
  generatePassword();
  alert(answers);
  //   // passwordText.value = password;

  //   //Make the password using random number generator and arrays.
  //   //Display the password.
}

function generatePassword() {
  prompt("Test 2");
  var answers = parameters();
  var length = answers.length;
  alert(length);
  pasLength = answers.pop();
  alert(answers);
  alert(pasLength);
  // works up to here
  var password = [];

  for (let i = 0; i <= pasLength; i++) {
    var result = Math.floor(Math.random() * length) + 1;
    // password = password.concat(answers[result]);
    password[i] = answers[result];
    alert(password);
    return password;
  }
  alert(password);
}

function parameters() {
  //   prompt("Test 3");
  var pasLength = 0;
  var lowercase = false;
  var uppercae = false;
  var numbers = false;
  var special = false;
  //   prompt("Test 4");
  let choice = prompt("What is the length of the password? (008-128 char)", "");
  pasLength = [choice];
  alert(choice);

  choice = prompt("Would you like to include lowercase letters?", "");
  if (choice == "yes") {
    lowercase = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  }
  alert(lowercase);
  prompt("Test 5");

  choice = prompt("Would you like to include uppercase letters?", "");
  if (choice == "yes") {
    uppercase = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }
  //test
  alert(uppercase);

  choice = prompt("Would you like to include numbers?", "");
  if (choice == "yes") {
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  //test
  alert(numbers);

  choice = prompt("Lastly, would you like to include special characters?", "");
  if (choice == "yes") {
    special = [
      "!",
      " ",
      "#",
      "$",
      "%",
      "&",
      "(",
      ")",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "]",
      "^",
      "_",
      "`",
      "{",
      "|",
      "}",
      "~",
    ];
  }
  //test
  alert(special);

  var answers = lowercase;
  answers = answers.concat(uppercase);
  answers = answers.concat(numbers);
  answers = answers.concat(special);
  answers = answers.concat(pasLength);
  alert(answers);
  return answers;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//writePassword <--generatePassword

// generateBtn.addEventListener("click", function () {
//   writePassword();
// });
