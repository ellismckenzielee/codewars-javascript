/*
The takeWhile function
https://www.codewars.com/kata/54f9173aa58bce9031001548
*/

function takeWhile (arr, pred) {
  let count = 0;
  let sequence = [];
  while (pred(arr[count]) && count < arr.length) {
    sequence.push(arr[count]);
    count++;
  }
  return sequence;
}
