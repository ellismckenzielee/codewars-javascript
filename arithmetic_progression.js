/*
Arithmetic Progression kata
https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript
*/

function arithmeticSequenceElements(a, d, n) {
	let output = `${a}`;
  let count = 1;
  let currentValue = a;
  while (count < n) {
    count++;
    currentValue += d;
    output += `, ${currentValue}`
  }
  return output;
}
