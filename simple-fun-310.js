/*
Simple Fun #310: Array Conversion kata
https://www.codewars.com/kata/5927aabdf3a75890a10000ee
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function conversion(arr) {
  const base26 = arr.map(getLetter);
  const longest = base26.reduce((longest, current) => {
    if(current.length  > longest) {
      return current.length;
    } 
    return longest;
  }, 0);
  const equalLengths = base26.map((current) => 'a'.repeat(longest - current.length) + current);
  const joined = equalLengths.join('');
  return alphabet[longest-1] + joined;
}

function getLetter(num) {
  const numStr = num.toString(26);
  let res = '';
  for (let i = 0; i< numStr.length; i++) {
    const num = parseInt(numStr[i], 26)
    res += alphabet[num];
  }
  return res;
}

