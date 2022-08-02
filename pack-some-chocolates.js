/*
Pack Some Chocolates kata
https://www.codewars.com/kata/5f5daf1a209a64001183af9b
*/

function makeChocolates(small, big, goal) {
  for(let i = big; i  >= 0; i--) {
    let remaining = goal - i*5;
    if (remaining % 2 === 0 && remaining / 2 <= small && remaining / 2 > -1 ) {
     return remaining / 2;
    }  
  }
  return -1;
}
