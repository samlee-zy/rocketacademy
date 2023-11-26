// Player must guess correctly twice in total
// Allowed to guess wrongly inbetween the 2 correct guses
// For each guess, output all information such as guessed word, secret word and number of correct guesses, the player needs until she wins

// ===== GLOBAL VARIABLES =====
const BANANA = "banana";
const CHISEL = "chisel";
const FAUCET = "faucet";
var counter = 0;
var winningNoOfGuess = 2;

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
      computerChoice = "banana";
      break;
    case 2:
      computerChoice = "chisel";
      break;
    case 3:
      computerChoice = "faucet";
      break;
    default:
      computerChoice = "Error";
  }

  // Return this as the Computer's choice
  return computerChoice;
};

// Everytime the player guess correctly, increase counter by 1
// Everytime the player guess wrongly, decrease the counter by 1

var main = function (input) {
  var compChoice = computerResults();
  if (input == compChoice) {
    counter++;
  } else {
    counter--;
    if (counter < 0) {
      counter = 0;
    }
  }
  if (counter == winningNoOfGuess) {
    counter = 0;
    return `You win!`;
  }
  return `Current Wins: ${counter} <br> Current Secret Word = ${compChoice} <br> Number of guesses needed to win = ${
    winningNoOfGuess - counter
  }`;
};
