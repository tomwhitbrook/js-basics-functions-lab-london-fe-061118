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

function calculatesFarePrice(startStreet, endStreet) {
  let dist = distanceTravelledInFeet(startStreet, endStreet);
  
  if (dist < 400) return 0;
  
  else if (dist > 2500) return "cannot travel that far";
  
  else if (dist < 2001) return ((dist - 400) * 0.02);
  
  else if (dist > 2000) return 25;
  
}