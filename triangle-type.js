/*
Triangle type kata
https://www.codewars.com/kata/53907ac3cd51b69f790006c5/train/javascript
*/

function triangleType(a, b, c){
  const sides = [a,b,c];
  const sidesSorted = [a,b,c].sort((a,b) => a - b);
  if (!(sidesSorted[0] + sidesSorted[1] > sidesSorted[2])) return 0;
  if (sidesSorted[0]**2 + sidesSorted[1]**2 > sidesSorted[2]**2) return 1;
  if (sidesSorted[0]**2 + sidesSorted[1]**2 === sidesSorted[2]**2) return 2;
  if (sidesSorted[0]**2 + sidesSorted[1]**2 < sidesSorted[2]**2) return 3;
}
