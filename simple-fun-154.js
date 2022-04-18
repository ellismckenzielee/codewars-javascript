/*
Simple Fun #154: Zero and One kata
https://www.codewars.com/kata/58ad09d6154165a1c80000d1/train/javascript
*/

function zeroAndOne(s) {
  return s.replace(/(10)|(01)/g, '').length;
}
