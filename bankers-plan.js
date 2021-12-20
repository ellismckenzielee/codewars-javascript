/*Bankers Plan Kata 
https://www.codewars.com/kata/56445c4755d0e45b8c00010a */
function fortune(f0, p, c0, n, i) {
  if (f0 < 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else {
    f0 = parseInt(f0 + (p / 100) * f0 - c0);
    return fortune(f0, p, c0 + parseInt((c0 * i) / 100), n - 1, i);
  }
}
