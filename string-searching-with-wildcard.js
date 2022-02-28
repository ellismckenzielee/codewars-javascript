/* String Searching with Wildcard kata
https://www.codewars.com/kata/546c7f89bed2e12fb300056f
*/
function find(needle, haystack){
  const search = needle.replace(/[^a-zA-Z0-9 ]/g, (match) => match === '_' ? '[^ ]' : `\\${match}`)
  const match = haystack.match(new RegExp(search));
  return match === null ? -1 : match.index;
}
