/* Simple Remove Duplicates kata 
https://www.codewars.com/kata/5ba38ba180824a86850000f7
*/
function solve(arr) {
  const output = [];
  arr.reverse();
  arr.forEach((elem) => {
    if (!output.includes(elem)) output.push(elem);
  });
  output.reverse();
  return output;
}
