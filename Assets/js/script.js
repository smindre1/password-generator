// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // ask user for number between 8 and 128
  var tempPassword = [];
  pasLength = prompt("What is the length of the password? (008-128 char)", "");
  if (8 <= pasLength && 128 >= pasLength) {
    var lowercase = [];
    var uppercase = [];
    var numbers = [];
    var special = [];
    choice = confirm("Would you like to include lowercase letters?");
    if (choice == true) {
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
    choice = confirm("Would you like to include uppercase letters?", "");
    if (choice == true) {
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
    choice = confirm("Would you like to include numbers?", "");
    if (choice == true) {
      numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    choice = confirm(
      "Lastly, would you like to include special characters?",
      ""
    );
    if (choice == true) {
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
    var answers = [];
    answers = answers.concat(lowercase);
    answers = answers.concat(uppercase);
    answers = answers.concat(numbers);
    answers = answers.concat(special);
    if (answers.length < 4) {
      return null;
    }
    for (let i = 1; i <= pasLength; i++) {
      var result = Math.floor(Math.random() * answers.length) + 1;
      tempPassword[i] = answers[result];
    }
    password = tempPassword.join("");
    return password;
  } else {
    // let password = null;
    return null;
  }
  // if number is not between 8 and 128 return null

  // ask them if they want special characters
  // ask them if they want upper case
  // ask them in they want numbers

  // check if user said yes to at least1
  // and if not return null
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
