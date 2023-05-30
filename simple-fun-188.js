/*
Simple Fun #188: Slogans kata
https://www.codewars.com/kata/58bf79fdc8bd4432d6000029/train/javascript
*/

function slogans(p,r) {
  let remaining = r;
  let count = 0;
  while (remaining) {
    let longest = 0;   
    for (let i=0; i < p.length; i++) {
      const substr = remaining.slice(0, i);
      if (p.endsWith(substr)) {
        longest = i;
      }
    }
    remaining = remaining.slice(longest);
    count++;
  }
  return count;
}
