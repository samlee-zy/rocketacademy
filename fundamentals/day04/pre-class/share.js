// Title: Juice Wedding
/* Notes 
- 4 oranges = 90 mL of orange juice
- ? of oranges so all guests have 1L
- User will enter number of guests; app will say how many oranges are needed; how many litres of orange juice you would get
*/

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var main = function (input) {
  // Generate a random dice number
  var diceResult = "";
  var randomDiceNumber = rollDice();
  var usrInput = parseInt(input);
  // Default output value is 'you lose'.
  if (randomDiceNumber % 2 === 0) {
    diceResult = `The dice is EVEN!`;
  } else {
    diceResult = "the dice is ODD";
  }
  var myOutputValue =
    `you lose! The dice rolled ${randomDiceNumber}, while you guessed ${usrInput}! ` +
    diceResult;
  if (usrInput > 3) {
    return `User should only input numbers between 1 to 3!`;
  }
  if (usrInput + 1 == randomDiceNumber || usrInput - 1 == randomDiceNumber) {
    return (
      `you win! The dice was: ${randomDiceNumber}, while you guessed: ${usrInput}, So you were +/- 1 of the dice range! ` +
      diceResult
    );
  }
  if (randomDiceNumber == 2 * usrInput) {
    return (
      `you win! The dice rolled ${randomDiceNumber}, while you guessed ${usrInput}! ` +
      diceResult
    );
  }
  return myOutputValue;
};
