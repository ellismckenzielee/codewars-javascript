/* 
Possibilities Array kata
https://www.codewars.com/kata/59b710ed70a3b7dd8f000027
*/

function isAllPossibilities(x){
  let output = x.length > 0;
  for(let i = 0; i< x.length; i++) {
    if (!x.includes(i)) output = false;
  }
  return output;
 }
