/* 
Sum Even Numbers kata
https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3
*/
function sumEvenNumbers(input) {
  return input.reduce((tot, cur) => {
    if (cur % 2 === 0) {
      return tot + cur;
    }
    return tot;
  }, 0);
}
