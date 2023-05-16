/*
Reverse Vowels in a String kata
https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript
*/

function reverseVowels(str) {
  const vowels = str.match(/[aeiou]/gi, str);
  if (!vowels) return str;
  vowels.reverse();
  return str.replace(/[aeiou]/gi, () => vowels.shift());
}
