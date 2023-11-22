// // LUCKY 11
// var rollDice = function () {
//   // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
//   var randomDecimal = Math.random() * 6;
//   // Remove the decimal with the floor operation.
//   // This will be an integer from 0 to 5 inclusive.
//   var randomInteger = Math.floor(randomDecimal);
//   // Add 1 to get valid dice rolls of 1 through 6 inclusive.
//   var diceNumber = randomInteger + 1;
//   return diceNumber;
// };

// var main = function (input) {
//   var dice1 = rollDice();
//   var dice2 = rollDice();

//   if (dice1 + dice2 == 11 || dice1 == input || dice2 == input) {
//     console.log(dice1);
//     console.log(dice2);
//     return `Player has won! Dice1: ${dice1}, Dice2: ${dice2}, Player's Guess: ${input}`;
//   }
//   console.log(dice1);
//   console.log(dice2);
//   return "Player LOST :((";
// };

var main = function (usrInput) {
  var input = usrInput.toLowerCase();
  if (input == "chicken rice" || input == "nasi lemak") {
    return "rice";
  } else if (input == "laksa" || input == "hokkien mee") {
    return "noodle";
  } else if (input == "roti prata" || input == "bak kuh teh") {
    return "other";
  } else {
    return "Input doesn't meet sample dishes.";
  }
};
