/*
Simple Fun #178: Faulty Odomerer kata
https://www.codewars.com/kata/58b8d22560873d9068000085
*/

function faultyOdometer(n) {
  const nString = n.toString().split('').map(num => {
    if (num > 4) return num - 1;
    return num;
  }).join('');
  return parseInt(nString, 9);
}
