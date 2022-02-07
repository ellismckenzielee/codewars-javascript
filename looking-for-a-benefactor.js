/* Looking for a Benefactor kata 
https://www.codewars.com/kata/569b5cec755dd3534d00000f
*/

function newAvg(arr=[], newavg) {
  const res = Math.ceil(newavg*(arr.length+1) - arr.reduce((tot, cur) => tot + cur, 0));
  if (res >= 0) return res; 
  else {
    throw new Error();
  }
}
