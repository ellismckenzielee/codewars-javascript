/*
Most Likely Kata
https://www.codewars.com/kata/56644a421b7c94c622000056/train/javascript
*/

function mostLikely(prob1,prob2){
  const [p1numerator, p1denominator] = prob1.split(':');
  const p1 = p1numerator / p1denominator;
  const [p2numerator, p2denominator] = prob2.split(':');
  const p2 = p2numerator / p2denominator;
  return p1 >= p2;
}
