/*
Chain Me kata
https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript
*/

function chain(input, fs) {
  if (fs.length > 0) return chain(fs[0](input), fs.slice(1));
  return input;
}
