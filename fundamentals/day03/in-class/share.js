// Title: Cost of Aircon
/* Notes 
- User enters number of hours of air con use
- App tells the Cost
- Aircon uses 2 kilowatts of electricity
- $0.2 per kilowatt-hour
*/

// user will type the input into main func
// Helper function will take total hours, multiplied by kilowatts and outputs cost

// // =========Helper===========================
// var airConCost = function (hours) {
//   // Define fixed variables
//   var airconKiloWattsUsage = 2;
//   var costPerKiloWattHour = 0.2;

//   // Calculate total kilowatts use based on input hours
//   var totalUsage = hours * airconKiloWattsUsage;

//   // Calculate cost and return
//   return totalUsage * costPerKiloWattHour;
// };

// // =========Main===========================
// var main = function (input) {
//   var totalCost = airConCost(input);

//   return `For ${input} hours of aircon usage, the total cost equates to $${totalCost}!`;
// };

// Title: Cost of Cellular Data
/* Notes 
- $19.99 - 50 GB post-paid data plan
- User enters how many GBs they use per month
- App will tell them how much they are paying per GB of data use
- If user exceeds 50 GBs, They purchase an additional 50GBs
*/

var numOfPacks = function (numGbsUsed) {
  var gbsPerPack = 50;
  return Math.ceil(numGbsUsed / gbsPerPack);
};

var costOfPacks = function (numOfPacks) {
  var costPerPack = 19.99;
  return costPerPack * numOfPacks;
};

var main = function (numGbsUsed) {
  var numPacks = numOfPacks(numGbsUsed);
  var totalCost = costOfPacks(numPacks);
  var costPerGb = totalCost / numGbsUsed;

  return `For ${numGbsUsed} Gbs of use per month, the cost per Gbs is $${costPerGb.toFixed(
    2
  )}!`;

  // if input is more than 50, buy another pack
  // numberOfPacks = input > 50 = buy new pack
  // total cost = 19.99 * numberOfPacks
  // perGb = totalCost / input
};
