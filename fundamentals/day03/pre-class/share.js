// Title: Juice Wedding
/* Notes 
- 4 oranges = 90 mL of orange juice
- ? of oranges so all guests have 1L
- User will enter number of guests; app will say how many oranges are needed; how many litres of orange juice you would get
*/

// =========Helper===========================
var calcOrangesNeeded = function (numGuests) {
  var orangesNeeded = numGuests * 4;
  return orangesNeeded;
};

var calcLitresOfOranges = function (calcOrangesNeeded) {
  var litresOfOrangeJuice = ((calcOrangesNeeded / 4) * 90) / 1000;
  return litresOfOrangeJuice.toFixed(2);
};

// =========Main===========================
var main = function (numGuests) {
  var orangesNeeded = calcOrangesNeeded(numGuests);
  var litresOfOrangeJuice = calcLitresOfOranges(orangesNeeded);
  return `For ${numGuests} guests, We need ${orangesNeeded} oranges to make ${litresOfOrangeJuice}Ls of orange Juice`;
};

// Title: SG Hugs
/* Notes 
- user enters num of seconds to hug on average
- calculate how many years to hug everyone
- 9 hours a day to sleep and eat
*/

// =========GlobalVars===========================
var sgPopulationSize = 5454000;
var hoursOfSleepRest = 9;

// =========Helper===========================
var convertSecondsToYears = function () {
  var seconds = 60;
  var minutes = 60;
  var hours = 24 - hoursOfSleepRest;
  var days = 365;
  var secondsInYear = seconds * minutes * hours * days;
  return secondsInYear;
};

var yearsToCompleteHugs = function (numSecondsOfHugs) {
  var totalSecondsOfHugs = numSecondsOfHugs * sgPopulationSize;
  var numYears = totalSecondsOfHugs / convertSecondsToYears();
  return numYears.toFixed(2);
};

// =========Main===========================
var main = function (numSecondsOfHugs) {
  var numYearsNeeded = yearsToCompleteHugs(numSecondsOfHugs);
  return `For ${numSecondsOfHugs} seconds of hug time, and a population of ${sgPopulationSize} people in Singapore, We need ${numYearsNeeded} years to hug everyone.`;
};

// Title: House Paint
/* Notes 
- User enters dollar amount of paint per litre
- App calculates how much it will cost

- 6-room house has area of 3m x 3m
- There are 6 windows and 8 doors - all same 90cm x 150cm size
- Paint will cover 300 sqm per litre
- Apply 2 coats of paint
*/

// =========GlobalVars===========================
var roomsInHouse = 6;
var numWindows = 6;
var numDoors = 8;
var numCoatsOfPaint = 2;

// =========Helper===========================
var convertCmToM = function (cm) {
  return cm / 100;
};

var surfaceArea = function (l, w) {
  return l * w;
};

var totalCostOfPaint = function (costOfPaint) {
  // fixed variables
  var paintCoverage = 300; //sqm per litre
  var roomLength = 3; //meters
  var roomWidth = 3; //meters
  var roomArea = surfaceArea(roomLength, roomWidth);

  // Convert window and door length to m
  var windoorLength = convertCmToM(90);
  var windoorWidth = convertCmToM(150);

  // Calculate surface area of window and door
  var surfaceAreaOfWindoor =
    surfaceArea(windoorLength, windoorWidth) * (numWindows + numDoors);

  // Calculate surfaceArea of rooms
  var surfaceAreaRooms = roomArea * roomsInHouse;

  // Calculate total surface area to paint
  var totalSurfaceArea = surfaceAreaRooms - surfaceAreaOfWindoor;
  var paintSurfaceArea = totalSurfaceArea * numCoatsOfPaint;

  // Ls of paint needed
  var litresOfPaintNeeded = paintSurfaceArea / paintCoverage;
  // Total Cost
  return costOfPaint * litresOfPaintNeeded;
};

// =========Main===========================
var main = function (input) {
  var totalCost = totalCostOfPaint(input).toFixed(2);
  return `For $${input} of paint per litres, with a house that has ${roomsInHouse} rooms, ${numWindows} windows, ${numDoors} door and requires ${numCoatsOfPaint} coats of paint, the total cost is: $${totalCost}!`;
};

// Title: Train Speed
/* Notes 
- Train 1 = 200kmph, will reach Tokyo in 2 hours
- Train 2 = travel faster, but delayed due to signalling fault
- Calculate how fast TRain 2 needs to travel to arrive at Tokyo at the same time as Train 1, based on how long it was delayed
- Output speed in kph
*/

// =========GlobalVars===========================
var train1Speed = 200; //kph
var train1TimeToTokyo = 2; //hours

// =========Helper===========================
var calcDistanceInKms = function (speed, distance) {
  return speed * distance;
};

var calcSpeedInKph = function (distance, hours) {
  return distance / hours;
};

var calcMinsToHours = function (mins) {
  return mins / 60;
};

// =========Main===========================
var main = function (delayInMins) {
  var distanceToTokyo = calcDistanceInKms(train1Speed, train1TimeToTokyo);
  var train2TimeToTokyo = train1TimeToTokyo - calcMinsToHours(delayInMins);
  var train2Speed = calcSpeedInKph(distanceToTokyo, train2TimeToTokyo).toFixed(
    2
  );
  return `For ${delayInMins} minutes delay, Train 2 will need to travel ${train2Speed}kph to arrive as the same time as Train 1.`;
};
