/*
Simple Fun #288: Turns on Road kata
https://www.codewars.com/kata/591c075a94414c1617000063/train/javascript
*/

function turnsOnRoad(x,y) {
  // calculate based on number of turns required for each direction of spiral
  const startingTurns = {
    "POSITIVE_X": 1,
    "NEGATIVE_X": 3,
    "POSITIVE_Y": 2,
    "NEGATIVE_Y": 4
  };
  
  let turns1;
  if (x === 0) turns1 = 0;
  else turns1 = (4 * (Math.abs(x)-1)) + ( x > 0 ? startingTurns["POSITIVE_X"] : startingTurns["NEGATIVE_X"]);
  let turns2;
  if (y === 0) turns2 = 0;
  else turns2 = (4* (Math.abs(y)-1)) + ( y > 0 ? startingTurns["POSITIVE_Y"] : startingTurns["NEGATIVE_Y"]);
  
  // check for corner coord 
  if (Math.abs(turns1 - turns2) === 1) return Math.min(turns1, turns2)
  return Math.max(turns1, turns2)
}
