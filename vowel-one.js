/*
Vowel One kata
https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript
*/

function vowelOne(s){
  return s.split('').map(char => /[aeiou]/gi.test(char) ? 1 : 0).join('');
}
