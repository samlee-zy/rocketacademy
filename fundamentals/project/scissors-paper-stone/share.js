// Title: Scissors Paper Stone
// Author: Sam Lee
// Last Updated: 23/11/2023

//===== Global State Storage =====
var userName = "";
var userWins = 0;
var computerWins = 0;
var counter = 0;
var gameMode = "";
var timesPlayed = 0;
var drawCounter = 0;

//===== Helper Functions =====
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

// Store the Scissors Paper Stone game into a separate function
var scissorsPaperStoneGame = function (input) {
  var output = "";
  var usrInput = input.toString().toLowerCase();
  var computerChoice = computerResults();

  // Create all relevant switch cases to account for all the win conditions for both players and computers
  switch (usrInput) {
    case "scissors":
      if (computerChoice === "stone") {
        timesPlayed++;
        computerWins++;
        output = `<b>Computer has WON!</b><br>${userName} you inputted: ✂️<br>The computer selected: 🗿 `;
      } else if (computerChoice === "paper") {
        timesPlayed++;
        userWins++;
        output = `<b>${userName} has WON!</b><br>${userName} you inputted: ✂️<br>The computer selected: 📄 `;
      } else {
        drawCounter++;
        output = `<b>This is a DRAW!</b> No points provided...<br>${userName} you inputted: ✂️<br>The computer selected: ✂️ `;
      }
      break;
    case "paper":
      if (computerChoice === "scissors") {
        timesPlayed++;
        computerWins++;
        output = `<b>Computer has WON!</b><br>${userName} you inputted: 📄<br>The computer selected: ✂️ `;
      } else if (computerChoice === "stone") {
        timesPlayed++;
        userWins++;
        output = `<b>${userName} has WON!</b><br>${userName} you inputted: 📄<br>The computer selected: 🗿 `;
      } else {
        drawCounter++;
        output = `<b>This is a DRAW!</b> No points provided...<br>${userName} you inputted: 📄<br>The computer selected: 📄 `;
      }
      break;
    case "stone":
      if (computerChoice === "paper") {
        timesPlayed++;
        computerWins++;
        output = `<b>Computer has WON!</b><br>${userName} you inputted: 🗿<br>The computer selected: 📄 `;
      } else if (computerChoice === "scissors") {
        timesPlayed++;
        userWins++;
        output = `<b>${userName} has WON!</b><br>${userName} you inputted: 🗿<br>The computer selected: ✂️ `;
      } else {
        drawCounter++;
        output = `<b>This is a DRAW!</b> No points provided...<br>${userName} you inputted: 🗿<br>The computer selected: 🗿 `;
      }
      break;
    default:
      output = `Please input either "Scissors", "Paper" or "Stone" `;
  }
  return output;
};

var compScissorsPaperStoneGame = function () {
  var output = "";
  var computerChoice1 = computerResults();
  var computerChoice2 = computerResults();

  // Create all relevant switch cases to account for all the win conditions for both players and computers
  switch (computerChoice1) {
    case "scissors":
      if (computerChoice2 === "stone") {
        timesPlayed++;
        computerWins++;
        output = `<b>Computer has WON!</b><br>${userName} your computer inputted: ✂️<br>The opponent computer selected: 🗿 `;
      } else if (computerChoice2 === "paper") {
        timesPlayed++;
        userWins++;
        output = `<b>${userName} has WON!</b><br>${userName} your computer inputted: ✂️<br>The opponent computer selected: 📄 `;
      } else {
        drawCounter++;
        output = `<b>This is a DRAW!</b> No points provided...<br>${userName} your computer inputted: ✂️<br>The opponent computer selected: ✂️ `;
      }
      break;
    case "paper":
      if (computerChoice2 === "scissors") {
        timesPlayed++;
        computerWins++;
        output = `<b>Computer has WON!</b><br>${userName} your computer inputted: 📄<br>The opponent computer selected: ✂️ `;
      } else if (computerChoice2 === "stone") {
        timesPlayed++;
        userWins++;
        output = `<b>${userName} has WON!</b><br>${userName} your computer inputted: 📄<br>The opponent computer selected: 🗿 `;
      } else {
        drawCounter++;
        output = `<b>This is a DRAW!</b> No points provided...<br>${userName} your computer inputted: 📄<br>The opponent computer selected: 📄 `;
      }
      break;
    case "stone":
      if (computerChoice2 === "paper") {
        timesPlayed++;
        computerWins++;
        output = `<b>Computer has WON!</b><br>${userName} your computer inputted: 🗿<br>The opponent computer selected: 📄 `;
      } else if (computerChoice2 === "scissors") {
        timesPlayed++;
        userWins++;
        output = `<b>${userName} has WON!</b><br>${userName} your computer inputted: 🗿<br>The opponent computer selected: ✂️ `;
      } else {
        drawCounter++;
        output = `<b>This is a DRAW!</b> No points provided...<br>${userName} your computer inputted: 🗿<br>The opponent computer selected: 🗿 `;
      }
      break;
    default:
      output = `Please input number of rounds to play!" `;
  }
  return output;
};

// Input validations for the username
var checkUsername = function (input) {
  if (input == "scissors" || input == "stone" || input == "paper") {
    return false;
  } else if (input == "") {
    return false;
  } else {
    return true;
  }
};

//===== Main Function =====
var main = function (input) {
  // Ensures that inputs are converted to a string and lowercase for standardisation
  var usrInput = input.toString().toLowerCase();
  console.log(usrInput);
  // Counter helps us determines where the user is on their current journey
  if (counter == 0) {
    var checkUser = checkUsername(usrInput);
    // Input validation for username to ensure that it meets specified conditions
    if (checkUser == false) {
      return `You must insert a name! Input box <b>cannot be <i>BLANK</i></b>, and it <b>cannot contain</b> the words: <b>Scissors</b>, <b>Paper</b> or <b>Stone</b>`;
    }
    // Increases counter when all checks are passed
    counter++;
    // Store the user's username into a separate variable
    userName = input;
  }

  // Second part of the journey focuses on identifying which game mode the user wants to go on
  if (counter == 1) {
    console.log(counter);
    counter++;
    return `Hi <b>${userName}</b>!<br>Welcome to the game.<br> Please enter <b>1</b> for Scissors, Paper, Stone game.<br> Please enter <b>2</b> for Computer vs Computer Scissors, Paper, Stone game!`;
  }

  // Second part of the journey initiates the gamemode. it'll help us determine the start of the game
  if (counter == 2) {
    console.log(counter);
    // Input validation to check and ensure that the input is not blank
    if (usrInput == "") {
      return `You cannot leave Input blank.<br>Please enter <b>1</b> for the Scissors, Paper, Stone game.<br>Else, Please enter <b>2</b> for the Computer vs Computer Scissors, Paper, Stone game!`;
    }
    // Using regex to ensure that either values 1 or 2 is used to determine which game mode will be played
    if (!/^[12]$/.test(usrInput)) {
      return `You must enter either <b>1</b> or <b>2</b> for your game selection.<br>Please enter <b>1</b> for the Scissors, Paper, Stone game.<br>Else, Please enter <b>2</b> for the other game`;
    }
    // Idenfities which gamemode to go into
    if (usrInput == "1") {
      // If the user specified that they want game mode 1 - that's scissors, paper stone game!
      counter++;
      gameMode = usrInput;
      return `Welcome to the <b>Scissors, Paper, Stone</b> game!<br> Excited to have you here ${userName}!<br>Please enter "<b>Scissors</b>", "<b>Paper</b>" or "<b>Stone</b>" in the textbox above to start playing!`;
    } else if (usrInput == "2") {
      // Otherwise, it'll be the other game that hasn't been built yet
      gameMode = usrInput;
      counter++;
      return `Welcome to the Computer vs Computer <b>Scissors, Paper, Stone</b> game!<br> Excited to have you here ${userName}!<br>Please enter the <b>number of rounds</b> you want the computer to play against each other!`;
    }
  }

  // User is on the 3rd stage of the journey and they've chosen to play the scissors, paper, stone game
  if (counter > 2 && gameMode == "1") {
    // We'll account for a few unique conditions here
    if (usrInput == "") {
      return `You cannot leave Input blank. Please enter <b>"Scissors"</b>, <b>"Paper"</b> or <b>"Stone"</b>`;
    }
    if (usrInput == "allyourbasearebelongtous") {
      return `🎊<b>---PLAYER HAS WON BY DEFAULT---</b>🎊<br>🥳<b>---ALL HAIL THE PLAYER!---</b>🥳`;
    }
    // If player types 'exit', than we'll reload the browser and start the application fresh again
    if (usrInput == "exit") {
      location.reload(true);
    }
    // Ensures that users type one of the necessary strings to play the game
    if (
      usrInput !== "scissors" &&
      usrInput !== "paper" &&
      usrInput !== "stone"
    ) {
      return `User error input! You can only enter "Scissors", "Paper" or "Stone"`;
    }
    // We store the results into a separate variable which will be used to surface the result later
    var scissorsPaperStoneGameResults = scissorsPaperStoneGame(usrInput);
    // Surface some results to the screen. This includes current score
    var currentScore = `<br>The current score is - User: ${userWins} | Computer: ${computerWins}`;
    // Highlights the numbers of draws that happened
    var drawScore = `<br>There were a total of ${drawCounter} Draws!`;
    // This calculates the current win percentage the player is on
    var currentWinPercentage =
      `<br>${userName} your win percentage is currently: ` +
      ((userWins / timesPlayed) * 100).toFixed(2) +
      "%";

    // Instructions provided to player to determine how they would like to proceed with next stage. I.e. Rematch or Exit
    var rematch = `<br>If you would like a rematch, please input "Scissors", "Paper" or "Stone" into the Input textbox again!`;
    var exitMessage = `<br>If you would like to exit, please type <b>exit</b> into the textbox!`;
    return (
      scissorsPaperStoneGameResults +
      currentScore +
      drawScore +
      currentWinPercentage +
      rematch +
      exitMessage
    );
  }

  // This code goes into the 2nd game mode, where the computer will play for the user
  if (counter > 2 && gameMode == "2") {
    // Reset the counters everytime this gamemode is triggered
    drawCounter = 0;
    userWins = 0;
    computerWins = 0;
    // Ensures that the input is defined as a number to be used in for loop and win percentage calculation
    var compInput = Number(input);
    console.log(typeof compInput);
    // Input validation to check and ensure that there is no blank values
    if (usrInput == "") {
      return `You cannot leave Input blank. Please enter <b>number of rounds</b> you want the computer to play against each other`;
    }
    // This checks through regex and ensures that there are no alphabetical characters in the input box
    if (/[a-zA-Z]/.test(compInput)) {
      return `This must be a number. Please enter <b>number of rounds</b> you want the computer to play against each other`;
    }
    // We'll account for a few unique conditions here
    if (usrInput == "allyourbasearebelongtous") {
      return `🎊<b>---PLAYER HAS WON BY DEFAULT---</b>🎊<br>🥳<b>---ALL HAIL THE PLAYER!---</b>🥳`;
    }
    // If player types 'exit', than we'll reload the browser and start the application fresh again
    if (usrInput == "exit") {
      location.reload(true);
    }
    // We run a for loop here to loop through the number of rounds inputted to get the score
    for (var i = 0; i < compInput; i++) {
      // We generate a separate function for this as we must expand this out further; but technically we could've referenced the first function if needed
      compScissorsPaperStoneGame();
    }
    // Surface some results to the screen. This includes Final Scores
    var finalScore = `<br>The final score is - User: ${userWins} | Computer: ${computerWins}`;
    // This details how many draws there were
    var drawScore = `<br>There were a total of ${drawCounter} Draws!`;
    // This calculates the current win percentage the player is on
    var currentWinPercentage =
      `<br>${userName} your computer win percentage was: ` +
      ((userWins / compInput) * 100).toFixed(2) +
      "%";
    // Instructions provided to player to determine how they would like to proceed with next stage. I.e. Rematch or Exit
    var rematch = `<br>For a rematch, please input the number of rounds for the computer to play again into the Input!`;
    var exitMessage = `<br>If you would like to exit, please type <b>exit</b> into the textbox!`;
    return (
      finalScore + drawScore + currentWinPercentage + rematch + exitMessage
    );
  }
};
