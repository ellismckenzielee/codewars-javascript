/*
Take a Number and Sum it's Digits to the Consecutive Power kata
https://www.codewars.com/kata/5626b561280a42ecc50000d1
*/

function sumDigPow(a, b) {
  const matches = [];
  for(let i = a; i < b; i++ ) {
   const digits =i.toString().split('');
   const sum = digits.reduce((tot, cur, indx) => tot + parseInt(cur)**(indx+1), 0)
    if (sum === i) matches.push(i);
  }
  return matches
}
