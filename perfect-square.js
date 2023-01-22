/*
Perfect Square kata
https://www.codewars.com/kata/584e93a70f60247eb8000132/train/javascript
*/

function perfectSquare(string){
  const matches = string.match(/[.]+/g);
  return !matches ?  false : matches.join('').length === matches[0].length ** 2;
}
