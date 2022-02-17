/* Arbitrary Word Wrapping kata 
https://www.codewars.com/kata/51e8241aed85d42c810002aa
*/

var wordWrap = function (str) {
  let [outputStr, index] = [str, 24]
  while (index < outputStr.length) {
    let char = outputStr.slice(index, index+1);
    if (index + 1 >= outputStr.length) break;
    let lhs = outputStr.slice(index-1, index);
    let rhs = index+1 >= outputStr.length ? ' ' : outputStr.slice(index+1, index+2);
    if (![char, rhs].includes(' ')) {
      outputStr = outputStr.slice(0, index) + '-\n' + outputStr.slice(index);
    } else{
      outputStr = outputStr.slice(0, index+1) + '\n' + outputStr.slice(index+1);
    }
    index+=26;
  }
  return outputStr;
};
