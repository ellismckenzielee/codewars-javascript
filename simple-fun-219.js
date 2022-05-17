/*
Simple Fun #218: Light Bulbs
https://www.codewars.com/kata/5901555b63bf404a66000029
*/

function lightBulbs(lights, n) {
  let lightsCopy = [...lights];
  for(let i = 0; i < n; i ++) {
    lightsCopy = lightsCopy.map(switchLightBulbs)
  }
  return lightsCopy
}

function switchLightBulbs  (elem, indx, arr) {
  let bulbBefore;
  if (indx === 0) {
    bulbBefore = arr.slice(-1)[0];
  } else{
    bulbBefore = arr[indx - 1]
  }
  return bulbBefore === 1 ? 1 - elem : elem;
}
