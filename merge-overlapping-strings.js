/*
Merge Overlapping Strings kata
https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript
*/

function mergeStrings(first, second){
  for(let i = 0; i < first.length; i++) {
    const overlap = first.substring(i);
    if (second.startsWith(overlap)) return first.substring(0, i) + second;
  }
  return first + second;
}
