/*
The Rhinestone Cowboy - Count the Dollars in his Boots kata
https://www.codewars.com/kata/58a2a561f749ed763c00000b/train/javascript
*/

function cowboysDollars(boots) {
  let bills = [0,0];
  for (let i = 0; i < 2; i++) {
    const matches = boots[i].match(/\|\[\(1\)\]\|/g);
    bills[i] += matches ? matches.length : 0;
  
  } 
  return `This Rhinestone Cowboy has ${bills[1]} dollar bills in his right boot and ${bills[0]} in the left`
}
