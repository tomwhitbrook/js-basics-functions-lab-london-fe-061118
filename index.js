// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
  if  (streetNumber > 42) {
    return (streetNumber - 42);
  }
  return (42 - streetNumber);
}

function distanceFromHqInFeet(streetNumber) {
  let NoBlocks = distanceFromHqInBlocks(streetNumber);
  
  return (NoBlocks * 264)
}

function distanceTravelledInFeet(startStreet, endStreet) {
  if (endStreet > startStreet) {
  return ((endStreet - startStreet) * 264);
  }
  return ((startStreet - endStreet) * 264);
}