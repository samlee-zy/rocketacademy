console.log("hello");

var main = function (input) {
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;
  var myOutputValue = `Hello! ${distanceInKm}km is equals to ${distanceInMiles} miles`;
  return myOutputValue;
};
