// Title: Scissors Paper Stone
// Author: Sam Lee

var computerResults = function () {
  // define a blank variable to store value
  var computerChoice = "";
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 3 inclusive.
  var compResults = randomInteger + 1;

  // Define statements, so that if 1 == Scissors, 2 == Paper and 3 == Stone
  switch (compResults) {
    case 1:
      computerChoice = "scissors";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "stone";
      break;
    default:
      computerChoice = "Error";
  }

  // Return this as the Computer's choice
  return computerChoice;
};

var main = function (input) {
  // Ensure that the user's input remains consistent as a string and in lowercase
  var usrInput = input.toString().toLowerCase();
  // Callout to determine the Computer's choice
  var computerChoice = computerResults();
  // Define an empty variable to store values
  var output = "";

  // This section checks for input errors
  if (usrInput == "") {
    return `You cannot leave Input blank. Please enter "Scissors", "Paper" or "Stone"`;
  }
  if (usrInput == "allyourbasearebelongtous") {
    return `🎊<b>---PLAYER HAS WON BY DEFAULT---</b>🎊<br>🥳<b>---ALL HAIL THE PLAYER!---</b>🥳`;
  }
  if (usrInput !== "scissors" && usrInput !== "paper" && usrInput !== "stone") {
    return `User error input! You can only enter "Scissors", "Paper" or "Stone"`;
  }

  // Switch statement to go through scenarios and determine whether Player Won, Lost or Draws with the computer

  switch (usrInput) {
    case "scissors":
      if (computerChoice === "stone") {
        output = `<b>Computer has WON!</b><br>The user inputted: ✂️<br>The computer selected: 🗿 `;
      } else if (computerChoice === "paper") {
        output = `<b>Player has WON!</b><br>The user inputted: ✂️<br>The computer selected: 📄 `;
      } else {
        output = `<b>This is a DRAW!</b><br>The user inputted: ✂️<br>The computer selected: ✂️ `;
      }
      break;
    case "paper":
      if (computerChoice === "scissors") {
        output = `<b>Computer has WON!</b><br>The user inputted: 📄<br>The computer selected: ✂️ `;
      } else if (computerChoice === "stone") {
        output = `<b>Player has WON!</b><br>The user inputted: 📄<br>The computer selected: 🗿 `;
      } else {
        output = `<b>This is a DRAW!</b><br>The user inputted: 📄<br>The computer selected: 📄 `;
      }
      break;
    case "stone":
      if (computerChoice === "paper") {
        output = `<b>Computer has WON!</b><br>The user inputted: 🗿<br>The computer selected: 📄 `;
      } else if (computerChoice === "scissors") {
        output = `<b>Player has WON!</b><br>The user inputted: 🗿<br>The computer selected: ✂️ `;
      } else {
        output = `<b>This is a DRAW!</b><br>The user inputted: 🗿<br>The computer selected: 🗿 `;
      }
      break;
    default:
      return `Please input either "Scissors", "Paper" or "Stone" `;
  }

  // Didn't want to repeat the rematch statement so many times, so I just left it here instead
  var rematch = `<br>If you would like a rematch, please input "Scissors", "Paper" or "Stone" into the Input textbox again!`;

  // Results the result
  return output + rematch;
};
