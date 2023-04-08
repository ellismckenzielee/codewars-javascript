/*
  Counting String Subsequences kata
  https://www.codewars.com/kata/52f7892a747862fc9a0009a6/train/javascript
*/

function countSubsequences(needle, haystack) {
  if (needle === '') return 1;
  if (haystack === '') return 0;
  let total = 0;
  for (let index = 0; index < haystack.length; index ++){
    if (needle[0] === haystack[index]) {
      total += countSubsequences(needle.slice(1), haystack.slice(index+1))
    }
  }
  return total;
}

let cache = {};
function countSubsequences(needle, haystack, root=true) {
  if (root) cache = {};
  if (needle === '') return 1;
  if (haystack === '') return 0;
  let total = 0;
  for (let index = 0; index < haystack.length; index ++){
    if (needle[0] === haystack[index]) {
      const cached_result = cache[`${needle.slice(1)}-${haystack.slice(index+1)}`];
      if (cached_result) total += cached_result;
      else total += countSubsequences(needle.slice(1), haystack.slice(index+1), root=false);
    }
  }
  cache[`${needle}-${haystack}`] = total;
  return total;
}
