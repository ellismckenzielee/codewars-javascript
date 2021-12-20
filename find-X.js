/*Find X kata
https://www.codewars.com/kata/5ae71f8c2c5061059e000044
*/
function findX(n) {
  let x = 0;
  let tot2n = ((2 * n - 1) * (2 * n)) / 2;
  for (let i = 0; i < n; i++) {
    x += 2 * n * i + tot2n;
  }
  return x;
}
