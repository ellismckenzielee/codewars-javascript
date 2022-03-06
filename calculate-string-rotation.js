/* 
calculate string rotation kata
https://www.codewars.com/kata/5596f6e9529e9ab6fb000014
*/

function shiftedDiff(first,second){
  let [count, match] = [0, false];
  while (count < first.length && match === false) {
    if (first === second) match = true;
    else {
      first = first.slice(-1) + first.slice(0,-1);
      count++;
    }
  }
  return match ? count : -1;
}
