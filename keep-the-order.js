/*
Keep the order kata
https://www.codewars.com/kata/582aafca2d44a4a4560000e7/train/javascript
*/

function keepOrder(ary, val) {
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] >= val) return i;
  }
  return ary.length;
}
