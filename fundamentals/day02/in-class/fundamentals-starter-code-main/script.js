var minutesInWeeks = function (input) {
  const hoursInDay = 24;
  const daysInWeek = 7;
  const minutesInDay = 60;
  var minutes = input * daysInWeek * hoursInDay * minutesInDay;
  if (input == 0) {
    return `In ${input} week, there are 0 minutes!`;
  } else if (input == 1) {
    return `In ${input} week, there are ${minutes} minutes! Wow!`;
  } else {
    return `In ${input} weeks, there are ${minutes} minutes! Wow!`;
  }
};

var fToC = function (fahrenheit) {
  var celcius = ((fahrenheit - 32) * 5) / 9;
  return `Fahrenheight: ${fahrenheit}, Celcius: ${celcius.toFixed(2)}`;
};

var roadTripCost = function (input) {
  var myOutputValue = input;
  return myOutputValue;
};

var iceCreamBuffet = function (input) {
  var myOutputValue = input;
  return myOutputValue;
};

var timeToTypeSonnets = function (guests) {
  // user inputs number of guests for the event
  // each guest needs 2 drinks
  // each drink has 4 ice cubes
  // each cube weights 1.5 grams
  // machine = produces 5 pounds of ice per hour
  // Estimate duration ice machine needs to run
  const pounds = 5;
  const gramsFormula = 453.592;
  const drinks = 2;
  const drinksIceCubes = 4;
  const cubeWeight = 1.5;
  var machineInGrams = pounds * gramsFormula;
  var iceForGuest = guests * drinks * drinksIceCubes * cubeWeight;
  var duration = iceForGuest / machineInGrams;

  return `For ${guests} guests, the machine will need ${duration.toFixed(
    3
  )} hours to make the ice!`;
};

//how many kegs of beer
// half-barrel-size kegs = 124 pints of beer
// customer = 2 pints per visit
// quarter = 365/4 (days in a quarter_)

// // Define functions for each container
// function handleContainer1(inputValue) {
//   // Your logic for the first container
//   return "Output for Container 1: " + inputValue;
// }

// function handleContainer2(inputValue) {
//   // Your logic for the second container
//   return "Output for Container 2: " + inputValue;
// }

// function handleContainer3(inputValue) {
//   // Your logic for the third container
//   return "Output for Container 3: " + inputValue;
// }

// function handleContainer4(inputValue) {
//   // Your logic for the fourth container
//   return "Output for Container 4: " + inputValue;
// }

// function handleContainer5(inputValue) {
//   // Your logic for the fifth container
//   return "Output for Container 5: " + inputValue;
// }

// // Define main function to be called when submit button is clicked
// function main(containerId, inputValue) {
//   switch (containerId) {
//     case "container1":
//       return handleContainer1(inputValue);
//     case "container2":
//       return handleContainer2(inputValue);
//     case "container3":
//       return handleContainer3(inputValue);
//     case "container4":
//       return handleContainer4(inputValue);
//     case "container5":
//       return handleContainer5(inputValue);
//     default:
//       return "Invalid container ID";
//   }
// }

// // Define button click functionality
// var buttons = document.querySelectorAll(".submit-button");

// buttons.forEach(function (button, index) {
//   button.addEventListener("click", function () {
//     // Get container id based on index
//     var containerId = "container" + (index + 1);

//     // Get input value from the corresponding input field
//     var inputField = document.querySelector("#" + containerId + " input");
//     var inputValue = inputField.value;

//     // Call the main function with container id and input value
//     var result = main(containerId, inputValue);

//     // Display result in the output element of the corresponding container
//     var outputDiv = document.querySelector("#" + containerId + " #output-div");
//     outputDiv.innerHTML = result;

//     // Reset input value
//     inputField.value = "";
//   });
// });
