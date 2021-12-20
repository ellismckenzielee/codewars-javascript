/*Max Sum Path kata 
https://www.codewars.com/kata/61a2fcac3411ca0027e71108
*/
function maxSumPath(l1, l2) {
  let total = 0;
  let i = 0;
  let l1Index = 0,
    l2Index = 0;
  let l1Tot = 0,
    l2Tot = 0;
  let l1Contains;
  let l2Contains;

  const maximum = Math.max(l1.slice(-1), l2.slice(-1));
  while (i < maximum + 1) {
    l1Contains = false;
    l2Contains = false;
    if (l1[l1Index] === i) {
      l1Tot += l1[l1Index];
      l1Contains = true;
      l1Index++;
    }
    if (l2[l2Index] === i) {
      l2Tot += l2[l2Index];
      l2Contains = true;
      l2Index++;
    }
    if (l1Contains && l2Contains) {
      total += Math.max(l1Tot, l2Tot);
      l1Tot = 0;
      l2Tot = 0;
    }

    i++;
  }
  total += Math.max(l1Tot, l2Tot);
  return total;
}
