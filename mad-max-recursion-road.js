/*
Mad Max: Recursion Road kata
https://www.codewars.com/kata/57bd0abcb9799763f1001bdc/train/javascript
*/

function max(array) {
  if (array.length) {
      return array[0] > max(array.slice(1)) ? array[0] : max(array.slice(1));
  } else {
    return -Infinity;
  }
}
