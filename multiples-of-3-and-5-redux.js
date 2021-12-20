/*Multiples of 3 and 5 redux kata
https://www.codewars.com/kata/54bb6ee72c4715684d0008f9
*/
function solution(number) {
  let nThrees = Math.floor((number - 1) / 3);
  let threesSum = (3 * nThrees * (nThrees + 1)) / 2;
  let nFives = Math.floor((number - 1) / 5);
  let fivesSum = (5 * nFives * (nFives + 1)) / 2;
  let nFifteens = Math.floor((number - 1) / 15);
  let fifteensSum = (15 * nFifteens * (nFifteens + 1)) / 2;
  return threesSum + fivesSum - fifteensSum;
}
