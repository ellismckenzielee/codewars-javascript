/*
For whom the bell tolls kata
https://www.codewars.com/kata/62665d43e67fbaf7b37212d2/train/javascript
*/

function bell(n) {
  let arr = [];
  for(let i = 1; i <= n; i++) {
    arr = arr.map((elem, indx) => elem+(indx+1))
    arr.push(i)
  }
  return arr;
}
