/*
Scramblies Kata
https://www.codewars.com/kata/55c04b4cc56a697bb0000048
*/

function scramble(str1, str2) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < alphabet.length; i++) { 
    const letter = alphabet[i];
    const reg = new RegExp(letter, 'g')
    const str1Matches = str1.match(reg) || [];
    const str2Matches = str2.match(reg) || [];
    if (str1Matches.length < str2Matches.length) return false;
  }
  return true;
}
