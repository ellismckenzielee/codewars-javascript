/* 
Adding Arrays kata
https://www.codewars.com/kata/59778cb1b061e877c50000cc
*/

function arrAdder(arr) {
  let words = [];
  for(let columnIndx = 0; columnIndx < arr[0].length; columnIndx++) {
    let word = '';
    for(let rowIndx = 0; rowIndx < arr.length; rowIndx++) {
      word += arr[rowIndx][columnIndx];
    }
    words.push(word);
  }
  return words.join(' ');
}
