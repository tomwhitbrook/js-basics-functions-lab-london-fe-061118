// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  if  (streetNumber > 42) {
    return (streetNumber - 42);
  }
  return (42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber) {
  distanceFromHqInBlocks(streetNumber);
  return (streetNumber * 264)
}

function distanceTravelledInFeet(startStreet, endStreet) {
  return ((endStreet - startStreet) * 264);
}