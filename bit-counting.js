/*
Bit Counting kata
https://www.codewars.com/kata/526571aae218b8ee490006f4
*/

var countBits = function(n) {
  return parseInt(n).toString(2).split('').filter(bit => bit === '1').length;
};
