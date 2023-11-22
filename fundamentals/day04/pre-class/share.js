// ----- HELPER FUNCTIONS -----
// Rolls Dice Randomly between range of 1 - 6
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

// Checks user's input to ensure that it meets certain standards
var usrInputChecks = function (usrInput) {
  var inputRange = 6;
  // Checks to make sure that user's input is a number
  if (Number.isInteger(Number(usrInput)) == false) {
    console.log("Input is NOT an integer.");
    return false;
  }
  // Checks to make sure that input range is between 1 - 6, not more or less
  else if (usrInput > inputRange || usrInput < 1) {
    console.log(usrInput);
    return false;
  }
  return true;
};

// Winning Condition 1: User wins if guess is within 1 for any of 2 dice.
var winGuessWithinOneForAnyDice = function (usrInput, dice1, dice2) {
  if (
    usrInput + 1 == dice1 ||
    usrInput - 1 == dice1 ||
    usrInput + 1 == dice2 ||
    usrInput - 1 == dice2
  ) {
    return true;
  }
  return false;
};

// Winning Condition 2: User wins if guess is within 1 for all 2 dice.
var winGuessWithinOneForTwoDice = function (usrInput, dice1, dice2) {
  if (
    (usrInput + 1 == dice1 || usrInput - 1 == dice1) &&
    (usrInput + 1 == dice2 || usrInput - 1 == dice2)
  ) {
    return true;
  }
  return false;
};

// Winning Condition 3: User wins if guess is within 1 of either dice but the user does not roll snake eyes.
var winGuessWithinOneForAnyDiceNoSnakeEyes = function (usrInput, dice1, dice2) {
  if (
    (usrInput + 1 == dice1 ||
      usrInput - 1 == dice1 ||
      usrInput + 1 == dice2 ||
      usrInput - 1 == dice2) &&
    !(dice1 == 1 && dice2 == 1)
  ) {
    return true;
  }
  return false;
};

// Winning Condition 4: User wins if guess is within 1 of either dice or if the user rolls snake eyes.
var winGuessWithinOneForAnyDiceYesSnakeEyes = function (
  usrInput,
  dice1,
  dice2
) {
  if (
    (usrInput + 1 == dice1 ||
      usrInput - 1 == dice1 ||
      usrInput + 1 == dice2 ||
      usrInput - 1 == dice2) &&
    dice1 == 1 &&
    dice2 == 1
  ) {
    return true;
  }
  return false;
};

// ----- MAIN FUNCTION -----
var main = function (input) {
  // Generate a random dice number for Dice 1
  var randomDice1 = rollDice();
  // Generate a random dice number for Dice 2
  var randomDice2 = rollDice();
  // Parses user's input as integer
  var usrInput = parseInt(input);
  var diceResult = `<li>User's Guess: ${usrInput}, Dice1: ${randomDice1}, Dice2: ${randomDice2}</li>`;

  // Runs the check conditions and immediately ends main function if the checks fails
  var usrChecks = usrInputChecks(usrInput);
  if (usrChecks == false) {
    return `User has input wrong information in textbox. Ensure that input is a NUMBER between 1 to 6. Otherwise it will fail`;
  }

  // Defining Winning Condition 1
  var guessWithin1ForAnyDice = winGuessWithinOneForAnyDice(
    usrInput,
    randomDice1,
    randomDice2
  );
  // Defining Winning Condition 2
  var guessWithin1ForBothDice = winGuessWithinOneForTwoDice(
    usrInput,
    randomDice1,
    randomDice2
  );
  // Defining Winning Condition 3
  var guessWithinOneNoSnakeEyes = winGuessWithinOneForAnyDiceNoSnakeEyes(
    usrInput,
    randomDice1,
    randomDice2
  );
  // Defining Winning Condition 4
  var guessWithinOneYesSnakeEyes = winGuessWithinOneForAnyDiceYesSnakeEyes(
    usrInput,
    randomDice1,
    randomDice2
  );
  // If User had badluck and lost entirely, then this message is displayed
  if (
    guessWithin1ForAnyDice == false &&
    guessWithin1ForBothDice == false &&
    guessWithinOneNoSnakeEyes == false &&
    guessWithinOneYesSnakeEyes == false
  ) {
    diceResult += `<li>User had badluck. Did not meet any winning conditions.</li>`;
    return diceResult;
  }
  // Checks all subsequent winning conditions otherwise and adds to the diceResult string, so we can output all the winning conditions that are met.
  if (guessWithin1ForAnyDice == true) {
    diceResult += `<li>User WON by Guessing within 1 for any 2 dices.</li>`;
  }
  if (guessWithin1ForBothDice == true) {
    diceResult += `<li>User WON by Guessing within 1 for all 2 dices.</li>`;
  }
  if (guessWithinOneNoSnakeEyes == true) {
    diceResult += `<li>User WON by guessing within 1 of either dices and DID NOT roll snake eyes.</li>`;
  } else if (guessWithinOneYesSnakeEyes == true) {
    diceResult += `<li>User WON by guessing within 1 of either dices and DID roll snake eyes.</li>`;
  }
  // Returns the output to application
  return diceResult;
};
