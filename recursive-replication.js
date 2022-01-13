/* 
Recursive Replication kata
https://www.codewars.com/kata/57547f9182655569ab0008c4
*/

function replicate(times, number) {
  if (times <= 0) {
    return [];
  } else {
    const arr = replicate(times - 1, number);
    arr.push(number);
    return arr;
  }
}
