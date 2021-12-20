/*Persistent Bugger kata
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
 */
function persistence(num, n = 0) {
  const numArray = num.toString().split("");
  if (numArray.length <= 1) {
    return n;
  } else {
    const mult = numArray.reduce((tot, cur) => tot * cur, 1);
    return persistence(mult, n + 1);
  }
}
