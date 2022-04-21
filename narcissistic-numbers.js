/*
Narcissistic Numbers kata
https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript
*/

// function isNarcissistic(n){
//   let startNum = n;
//   let startNumStr = n.toString();
//   let total = 0;
//   while (n > 0) {
//     const remainder = n % 10;
//     total += remainder**startNumStr.length;
//     n = Math.floor(n / 10);
//   }
//   return total === startNum;
// }

function isNarcissistic(n) {
  return n === n.toString().split('').reduce((tot, cur, indx, arr)=>{
    return tot + cur**arr.length;
  }, 0)
}
