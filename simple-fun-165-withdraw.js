/*Simple Fun #165: Withdraw kata
https://www.codewars.com/kata/58afce23b0e8046a960000eb 
*/
function withdraw(n) {
  let divisbleBy20 = true;
  if (n % 20 !== 0) {
    n -= 50;
    divisbleBy20 = false;
  }
  let divisible100 = Math.floor(n / 100);
  n -= divisible100 * 100;

  let divisible20 = Math.floor(n / 20);
  n -= divisible20 * 20;

  return [divisible100, divisbleBy20 ? 0 : 1, divisible20];
}
