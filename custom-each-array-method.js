/*
Custom each() Array Method kata
https://www.codewars.com/kata/513e7e1aee7d36073e00000d/train/javascript
*/

function each (func) {
  for (let i = 0; i < this.length; i++) {
   const res = func(this[i],i);
    if (res === true) break;
  }
}
Array.prototype.each = each
