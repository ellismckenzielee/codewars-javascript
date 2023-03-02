/*
Thinking and Testing: I hate big and small kata
https://www.codewars.com/kata/56dfd5dfd28ffd52c6000bb7/solutions/javascript
*/

function testit(arr){
  arr.sort((a,b) => a - b)
  const filtered_arr = arr.filter(elem => elem != arr[0] && elem !== arr[arr.length -1])
  if (filtered_arr.length === 0) return 0;
  return Math.round(filtered_arr.reduce((tot, a)=>tot + a, 0)/(filtered_arr.length)*100)/100;
}

