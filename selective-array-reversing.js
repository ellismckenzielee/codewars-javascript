/*
Selective Array Reversing kata
https://www.codewars.com/kata/58f6000bc0ec6451960000fd/train/javascript
*/

function selReverse(array, length) {
  length = length === 0 ? 1 : length;
  const reversedArray = [];
  for(let start = 0; start < array.length ; start += length)  {
    const end = start + length;
    reversedArray.push(...array.slice(start, end).reverse())
  }
  return reversedArray
}
