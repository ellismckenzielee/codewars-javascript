/*
Once kata
https://www.codewars.com/kata/5307ff5b588fe6d7000000a5/train/javascript
*/

function once(fn) {
  let count = 0;
  return function(...args) {
      if (count === 0) {
        count++;
        return fn(...args);
      } return undefined;
  }
}
