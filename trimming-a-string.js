/*
Trimming a String kata 
https://www.codewars.com/kata/563fb342f47611dae800003c/train/javascript
*/

function trim(str, size) {
  if (str.length <= size) return str;
  else if (size <= 3) return str.slice(0, size) + '...';
  else return str.slice(0, size-3) + '...';
}
