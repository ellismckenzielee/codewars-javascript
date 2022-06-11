/*
Directions Reduction kata
https://www.codewars.com/kata/550f22f4d758534c1100025a
*/

function dirReduc(arr){
  let directionString = arr.join(',');
  let changesMade = true;
  while(changesMade) {
    const before = directionString;
    let after = directionString.replace(/(NORTH,SOUTH)|(SOUTH,NORTH)|(WEST,EAST)|(EAST,WEST)/g, '');
    after = after.replace(/,+/g, ',')
    if (before !== after) {
      directionString = after;
    } else {
      changesMade = false;
    }
  }
  return directionString.split(',').filter(dir => dir!=='')
}
