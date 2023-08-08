/*
The unknown but known variables: addition kata
https://www.codewars.com/kata/5716955a794d3013d00013f9/train/javascript
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
function theVar(theVariables) {
  const [x, y] = theVariables.split('+');
  return 2 + alphabet.indexOf(x) + alphabet.indexOf(y);
}
