/*
Number Format kata
https://www.codewars.com/kata/565c4e1303a0a006d7000127
*/

// var numberFormat = function (number) {
//   const numStr = number.toString();
//   let [count, output] = [0, ''];
//   for (let i = numStr.length - 1; i >= 0; i --) {
//     output = numStr[i] + output;
//     count++;
//     if (count === 3 && i !== 0) {
//       output = ',' + output;
//       count = 0}
//   }
//   return output.replace(/(?<!\d),/g, '')
// };

var numberFormat = function (number) {
  const numStr = number.toString();
  const formatted = numStr.replace(/\d(?=(\d\d\d)+$)/g, i => i +',')
  return formatted;
};
