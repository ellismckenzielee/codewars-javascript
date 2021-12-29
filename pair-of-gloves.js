/* Pair of Gloves kata 
https://www.codewars.com/kata/58235a167a8cb37e1a0000db
*/
function numberOfPairs(gloves) {
  const glovesCount = {};
  let pairs = 0;
  for (let i = 0; i < gloves.length; i++) {
    if (glovesCount.hasOwnProperty(gloves[i])) {
      glovesCount[gloves[i]] = glovesCount[gloves[i]] + 1;
      if (glovesCount[gloves[i]] % 2 === 0) {
        glovesCount[gloves[i]] === 0;
        pairs++;
      }
    } else {
      glovesCount[gloves[i]] = 1;
    }
  }
  return pairs;
}
